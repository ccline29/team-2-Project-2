const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#expense-name').value.trim();
  const date = document.querySelector('#expense-date').value.trim();
  const category = document.querySelector('#expense-category').value.trim();
  const payee = document.querySelector('#expense-payee').value.trim();
  const amount = document.querySelector('#expense-amount').value.trim();
  if (name && date && category && payee && amount) {
    const response = await fetch(`/api/expenses`, {
      method: 'POST',
      body: JSON.stringify({ name, date, category, payee, amount }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/expenses');
    } else {
      alert('Failed to create new expense');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/expeses/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/expenses');
    } else {
      alert('Failed to delete expense');
    }
  }
};

document
  .querySelector('.new-expenses-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.expenses-delete-btn')
  .addEventListener('click', delButtonHandler);