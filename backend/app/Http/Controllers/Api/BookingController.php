<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'experience_slug' => ['required', 'string', 'max:255'],
            'start_date' => ['required', 'date'],
            'guests' => ['required', 'integer', 'min:1'],
            'lead_guest' => ['required', 'array'],
            'lead_guest.name' => ['required', 'string', 'max:255'],
            'lead_guest.email' => ['required', 'email', 'max:255'],
            'lead_guest.phone' => ['required', 'string', 'max:32'],
        ]);

        return response()->json([
            'data' => [
                'reference' => 'PS-'.strtoupper(substr(md5(json_encode($validated)), 0, 8)),
                'status' => 'pending',
                'message' => 'Booking received (placeholder — persistence not implemented).',
                'payload' => $validated,
            ],
        ], 201);
    }
}
