function renderAccount(accountData) {
    const account = document.createElement('div');
    account.classList.add('div');
    account.id = `div-${accountData.id}`;

    const name = document.createElement('h4');
    name.classList.add('div-name');
    name.textContent = accountData.name;

    const accountValue = document.createElement('div');
    accountValue.classList.add('div-accountValue');
    accountValue.textContent = 'R$ ' + accountData.accountValue;

    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'Delete';

    btnDelete.addEventListener('click', async () => {
        await deleteAccount(accountData.id);
        // Remove o elemento HTML da conta após a exclusão bem-sucedida
        account.remove();
    });

    const btnEdit = document.createElement('button');
    btnEdit.textContent = 'Edit';

    btnEdit.addEventListener('click', () => {
        editAccount(accountData);
    });

    account.append(name, accountValue, btnDelete, btnEdit);
    document.querySelector('#accounts').appendChild(account);
}

async function fetchAccounts() {
    const accounts = await fetch("http://localhost:3000/accounts").then(res => res.json());
    accounts.forEach(renderAccount);

    document.addEventListener('DOMContentLoaded', () => {
        fetchAccounts();
    })
}

async function editAccount(accountData) {
    const newName = prompt("Enter new name:", accountData.name);
    const newAccountValue = prompt("Enter new account value:", accountData.accountValue);

    if (newName !== null && newAccountValue !== null) {
        const updatedAccountData = {
            name: newName,
            accountValue: newAccountValue
        };

        await fetch(`http://localhost:3000/accounts/${accountData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedAccountData)
        });

        // Atualiza a exibição na página
        const accountDiv = document.getElementById(`div-${accountData.id}`);
        accountDiv.querySelector('.div-name').textContent = newName;
        accountDiv.querySelector('.div-accountValue').textContent = 'R$ ' + newAccountValue;
    }
}

async function deleteAccount(accountId) {
    await fetch(`http://localhost:3000/accounts/${accountId}`, {
        method: 'DELETE'
    });
}

const form = document.querySelector('form')

form.addEventListener('submit', async (ev) => {
  ev.preventDefault()

  const accountData = {
    name: document.querySelector('#name').value,
    accountValue: document.querySelector('#accountValue').value,
  }

  const response = await fetch('http://localhost:3000/accounts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(accountData)
  })

  const savedAccount = await response.json()
  form.reset()
  renderAccount(savedAccount)

  console.log(savedAccount)
})