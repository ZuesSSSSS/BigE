<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

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
            'image' => 'https://images.unsplash.com/photo-1547343052-1f5e556d53d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('products')->insert([
            'name' => 'Pencil',
            'description' => 'Made of graphite.',
            'stock' => 30,
            'price' => 1.99,
            'image' => 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('products')->insert([
            'name' => 'Milk (4L)',
            'description' => 'Full of calcium',
            'stock' => 6,
            'price' => 4.60,
            'image' => 'https://images.unsplash.com/photo-1517448931760-9bf4414148c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
    }
}
