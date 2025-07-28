<?php

namespace App\Http\Controllers;

use App\Models\Lot;
use Illuminate\Http\Request;

class LotController extends Controller
{
    public function index(): \Illuminate\Http\JsonResponse
    {
        $lots = Lot::orderBy('id', 'desc')->get();
        return response()->json(['success' => true, 'data' => $lots]);
    }

    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        $validated = $request->validate([
           'name' => 'required|string|max:255',
           'price' => 'required|numeric|min:0',
           'status' => 'required|in:active,completed'
        ]);
        $lot = Lot::create($validated);
        return response()->json(['success' => true, 'data' => $lot]);
    }

    public function update(Request $request, $id): \Illuminate\Http\JsonResponse
    {
        $validated = $request->validate([
           'name' => 'required|string|max:255',
           'price' => 'required|numeric|min:0',
           'status' => 'required|in:active,completed'
        ]);
        $lot = Lot::findOrFail($id);
        $lot -> update($validated);
        return response()->json(['success' => true, 'data' => $lot]);
    }

    public function destroy($id): \Illuminate\Http\JsonResponse
    {
        Lot::findOrFail($id)->delete();
        return response()->json(['success' => true]);
    }
}
