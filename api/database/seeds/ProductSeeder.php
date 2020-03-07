<?php

use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            'name' => 'A gun',
            'description' => '12 Gauge shotgun',
            'stock' => 10,
            'price' => 45.99,
        ]);

        DB::table('products')->insert([
            'name' => 'Pencil',
            'description' => 'Made of graphite.',
            'stock' => 30,
            'price' => 1.99,
        ]);

        DB::table('products')->insert([
            'name' => 'Milk (4L)',
            'description' => 'Full of calcium',
            'stock' => 6,
            'price' => 4.60,
        ]);
    }
}
