const divCategorias = document.getElementById('divCategorias');

async function loadCategories() {
  let response = await fetch ('http://localhost:3000/api/categoria');
  let categories = await response.json();
  categories.forEach(category => {
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.value = category.id;
    checkBox.id = "category_" + category.id;
    divCategorias.append(checkBox);
    const label = document.createElement('label');
    label.textContent = category.nombre;
    label.htmlFor = "category_" + category.id;
    divCategorias.append(label);
  });
}

function saveData ()
{
  let categoriesChecked = document.querySelectorAll(['input[type="checkbox"]:checked']);
  let ids = [...categoriesChecked].map(category => category.value);
  localStorage.categorias = JSON.stringify(ids);
}

document.getElementById('actualizar').addEventListener('click', saveData);

loadCategories();