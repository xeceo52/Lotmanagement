<?php

namespace Database\Factories;

use App\Models\Lot;
use Illuminate\Database\Eloquent\Factories\Factory;

class LotFactory extends Factory
{
    protected $model = Lot::class;

    public function definition(): array
    {
        return [
            'name'   => $this->faker->words(3, true),
            'price'  => $this->faker->randomFloat(2, 1, 1000),
            'status' => $this->faker->randomElement(['active', 'completed']),
        ];
    }
}
