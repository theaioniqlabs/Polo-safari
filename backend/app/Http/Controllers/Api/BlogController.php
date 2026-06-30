<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class BlogController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            'data' => [
                [
                    'slug' => 'monsoon-ecology-at-polo-forest',
                    'title' => 'Monsoon Ecology at Polo Forest',
                    'excerpt' => 'Placeholder blog post for API scaffold.',
                    'published_at' => '2026-06-01',
                ],
            ],
            'meta' => [
                'total' => 1,
                'message' => 'Placeholder data — connect to blogs table in a later sprint.',
            ],
        ]);
    }
}
