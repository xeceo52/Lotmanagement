@extends('app')

@section('content')
    <div class="container">

        <!--  Шапка  -->
        <header class="h-20 bg-black rounded-2xl flex justify-between items-center p-4 max-sm:p-2">
            <h1 class="text-4xl text-white max-sm:text-lg">Управления лотами</h1>
            <button id="btnAdd" class="w-45 bg-white rounded-xl float-right py-2 px-4 max-sm:text-[9pt]">Добавить лот</button>
        </header>

        <!--  Таблица лотов  -->
        <section class="mt-4 bg-black rounded-2xl p-4 max-sm:p-1">
            <table id="lotsTable" class="w-full bg-white mx-auto rounded-xl max-sm:text-[9pt]">
                <thead class="">
                <tr>
                    <th class="px-2 py-1 max-sm:hidden">ID</th>
                    <th class="px-2 py-1">Название</th>
                    <th class="px-2 py-1">Цена</th>
                    <th class="px-2 py-1">Статус</th>
                    <th class="px-2 py-1 max-xs:hidden">Действия</th>
                </tr>
                </thead>
                <tbody class="text-center"></tbody>
            </table>
        </section>
    </div>

    <!--  Модальное окно для добавления/редактирования лотов  -->
    <div id="lotModal" class="fixed inset-0 bg-black/70 hidden flex items-center justify-center">
        <div class="bg-white rounded-xl p-6 w-full max-w-md">

            <!--  Динамический заголовок модального окна  -->
            <h2 id="modalTitle" class="text-xl mb-4"></h2>

            <form id="lotForm">
                <input type="hidden" id="lotId">
                <div class="mb-4">
                    <label class="block">Название</label>
                    <input type="text" id="name" class="w-full border px-2 py-1 rounded-lg" required>
                </div>
                <div class="mb-4">
                    <label class="block">Цена</label>
                    <input type="number" id="price" class="w-full border px-2 py-1 rounded-lg" required min="0" step="0.01">
                </div>
                <div class="mb-4">
                    <label class="block">Статус</label>
                    <select id="status" class="w-full border px-2 py-1 rounded-lg" required>
                        <option value="active">active</option>
                        <option value="completed">completed</option>
                    </select>
                </div>
                <div>
                    <button id="btnDeleteInModal" type="button" class="flex items-center justify-center space-x-2 w-full mb-4 bg-red-500 rounded-xl text-white p-1 sm:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H7m5-5l-5 5 5 5"/></svg>
                        <span>Удалить</span>
                    </button>
                </div>
                <div class="flex justify-end space-x-2">
                    <button type="button" id="btnCancel" class="px-4 py-2">Отмена</button>
                    <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded-xl">Сохранить</button>
                </div>
            </form>
        </div>
    </div>
@endsection
