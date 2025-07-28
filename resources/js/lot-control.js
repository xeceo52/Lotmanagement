import axios from 'axios';
export function lotControl() {
    document.addEventListener('DOMContentLoaded', () => {
        const modal = document.getElementById('lotModal');
        const form  = document.getElementById('lotForm');
        const tbody = document.querySelector('#lotsTable tbody');
        const btnAdd = document.getElementById('btnAdd');
        const btnCancel = document.getElementById('btnCancel');
        const modalTitle = document.getElementById('modalTitle');
        const btnDeleteInModal = document.getElementById('btnDeleteInModal')

        // Флаг для отслеживания включения редактирования
        let isEdit = false;

        // Загрузка списка лотов
        async function loadLots() {
            try {
                const res = await axios.get('/api/lots');
                tbody.innerHTML = '';
                res.data.data.forEach(lot => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                    <td class="px-2 py-2 max-sm:hidden">${lot.id}</td>
                    <td class="px-2 py-2">${lot.name}</td>
                    <td class="px-2 py-2">${lot.price}</td>
                    <td class="px-2 py-2">${lot.status}</td>
                    <td class="px-2 py-2 space-x-1">
                        <button data-id="${lot.id}" class="btn-edit inline-flex items-center bg-amber-300 rounded-2xl text-white p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17h2m-1-1v1m9.414-9.414a2 2 0 010 2.828L13.414 19.414a2 2 0 01-2.828 0L3 12.828v-..."/></svg>
                            <span class="max-sm:hidden">Редактировать</span>
                        </button>
                        <button data-id="${lot.id}" class="btn-delete max-sm:hidden inline-flex items-center bg-red-500 rounded-2xl text-white p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H7m5-5l-5 5 5 5"/></svg>
                            <span class="max-sm:hidden">Удалить</span>
                        </button>
                    </td>
                `;
                    tbody.appendChild(row);
                });
                attachActions();
            } catch (e) {
                console.error('Не удалось загрузить список лотов ', e)
            }
        }

        // Обработчики для кнопок управления лотами
        function attachActions() {
            document.querySelectorAll('.btn-edit').forEach(btn =>
                btn.addEventListener('click', async e => {
                    isEdit = true;
                    const id = e.currentTarget.dataset.id;
                    const lotRes = await axios.get('/api/lots');
                    const lot = lotRes.data.data.find(l => l.id == id);
                    document.getElementById('lotId').value = id;
                    document.getElementById('name').value = lot.name;
                    document.getElementById('price').value = lot.price;
                    document.getElementById('status').value = lot.status;
                    modalTitle.textContent = 'Редактировать лот';
                    btnDeleteInModal.dataset.id = id;
                    btnDeleteInModal.classList.remove('hidden');
                    modal.classList.remove('hidden');
                })
            );
            document.querySelectorAll('.btn-delete').forEach(btn =>
                btn.addEventListener('click', async e => {
                    if (!confirm('Удалить лот?')) return;
                    await axios.delete(`/api/lots/${e.currentTarget.dataset.id}`);
                    loadLots();
                })
            );
        }

        btnAdd.addEventListener('click', () => {
            isEdit = false;
            form.reset();
            modalTitle.textContent = 'Добавить лот';
            btnDeleteInModal.classList.add('hidden');
            modal.classList.remove('hidden');
        });

        btnDeleteInModal.addEventListener('click', async () => {
            const id = btnDeleteInModal.dataset.id;
            if (!confirm('Точно удалить этот лот?')) return;
            await axios.delete(`/api/lots/${id}`);
            modal.classList.add('hidden');
            loadLots();
        });

        // Закрытие модального окна по клику на пустую область экрана
        modal.addEventListener('click', e => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });

        // Закрытие модального окна через кнопку "Отмена"
        btnCancel.addEventListener('click', () => {
            modal.classList.add('hidden');
        });

        // Отправка формы
        form.addEventListener('submit', async e => {
            e.preventDefault();
            const id = document.getElementById('lotId').value;
            const payload = {
                name: document.getElementById('name').value,
                price: document.getElementById('price').value,
                status: document.getElementById('status').value,
            };
            if (isEdit) {
                await axios.put(`/api/lots/${id}`, payload);
            } else {
                await axios.post('/api/lots', payload);
            }
            modal.classList.add('hidden');
            loadLots();
        });

        loadLots();
    });
}
