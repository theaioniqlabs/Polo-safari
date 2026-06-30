<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class ExperienceController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            'data' => [
                [
                    'slug' => 'heritage-walk-polo-forest',
                    'title' => 'Heritage Walk — Polo Forest',
                    'pillar' => 'heritage',
                    'summary' => 'Placeholder experience for API scaffold.',
                    'price_from' => 2499,
                    'currency' => 'INR',
                ],
                [
                    'slug' => 'monsoon-ecology-trail',
                    'title' => 'Monsoon Ecology Trail',
                    'pillar' => 'education',
                    'summary' => 'School-friendly ecology program placeholder.',
                    'price_from' => 1899,
                    'currency' => 'INR',
                ],
            ],
            'meta' => [
                'total' => 2,
                'message' => 'Placeholder data — connect to experiences table in a later sprint.',
            ],
        ]);
    }

    public function show(string $slug): JsonResponse
    {
        return response()->json([
            'data' => [
                'slug' => $slug,
                'title' => ucwords(str_replace('-', ' ', $slug)),
                'pillar' => 'heritage',
                'summary' => 'Placeholder experience detail for API scaffold.',
                'itinerary' => [],
                'price_from' => 2499,
                'currency' => 'INR',
            ],
        ]);
    }
}
