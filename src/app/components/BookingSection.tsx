import { Calendar, Clock, Video, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function BookingSection() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Generate calendar days for current month
  const daysInMonth = 31;
  const currentMonth = 'March 2026';
  
  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', 
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  return (
    <section className="bg-gradient-to-br from-[#0080FF]/5 via-white to-[#00D66B]/5 px-6 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#0080FF]/10 px-4 py-2 text-sm font-semibold text-[#0080FF]">
            <Calendar className="h-4 w-4" />
            Book Your Call
          </div>
          <h2 className="mb-4 text-4xl font-bold text-black md:text-5xl">
            Schedule Your 20-Minute Systems Audit
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Let's analyze your student's needs and design a custom learning system.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-2xl">
            <div className="grid lg:grid-cols-2">
              {/* Calendar Side */}
              <div className="border-b-2 border-gray-200 p-8 lg:border-b-0 lg:border-r-2">
                <div className="mb-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-black">{currentMonth}</h3>
                    <div className="flex gap-2">
                      <button className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-gray-200 transition-all hover:border-[#0080FF] hover:bg-[#0080FF]/10">
                        <ChevronLeft className="h-5 w-5 text-gray-600" />
                      </button>
                      <button className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-gray-200 transition-all hover:border-[#0080FF] hover:bg-[#0080FF]/10">
                        <ChevronRight className="h-5 w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* Weekday headers */}
                  <div className="mb-2 grid grid-cols-7 gap-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                      <div key={day} className="text-center text-xs font-semibold text-gray-500">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar grid */}
                  <div className="grid grid-cols-7 gap-2">
                    {/* Empty cells for offset */}
                    {[...Array(6)].map((_, i) => (
                      <div key={`empty-${i}`} className="aspect-square"></div>
                    ))}
                    
                    {/* Days */}
                    {[...Array(daysInMonth)].map((_, i) => {
                      const day = i + 1;
                      const isSelected = selectedDate === day;
                      const isAvailable = day > 26; // Mock availability
                      
                      return (
                        <button
                          key={day}
                          onClick={() => isAvailable && setSelectedDate(day)}
                          disabled={!isAvailable}
                          className={`aspect-square rounded-lg text-sm font-semibold transition-all ${
                            isSelected
                              ? 'bg-[#0080FF] text-white shadow-lg'
                              : isAvailable
                              ? 'border-2 border-gray-200 text-gray-900 hover:border-[#0080FF] hover:bg-[#0080FF]/10'
                              : 'cursor-not-allowed text-gray-300'
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-lg bg-[#0080FF]/5 p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="h-3 w-3 rounded-full bg-[#0080FF]"></div>
                    <span>Available dates</span>
                  </div>
                </div>
              </div>

              {/* Time Slots & Booking Side */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-bold text-black">Select Time</h3>
                  <p className="text-sm text-gray-600">
                    {selectedDate ? `March ${selectedDate}, 2026` : 'Choose a date first'}
                  </p>
                </div>

                {selectedDate ? (
                  <div className="mb-6 space-y-3">
                    {availableTimes.map((time) => {
                      const isSelected = selectedTime === time;
                      return (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`flex w-full items-center justify-between rounded-lg border-2 p-4 transition-all ${
                            isSelected
                              ? 'border-[#00D66B] bg-[#00D66B]/10'
                              : 'border-gray-200 hover:border-[#00D66B] hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Clock className={`h-5 w-5 ${isSelected ? 'text-[#00D66B]' : 'text-gray-400'}`} />
                            <span className={`font-semibold ${isSelected ? 'text-[#00D66B]' : 'text-gray-900'}`}>
                              {time}
                            </span>
                          </div>
                          {isSelected && (
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00D66B]">
                              <span className="text-xs text-white">✓</span>
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="mb-6 flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
                    <div className="text-center text-gray-400">
                      <Calendar className="mx-auto mb-2 h-12 w-12" />
                      <p>Select a date to see available times</p>
                    </div>
                  </div>
                )}

                {/* Booking Details */}
                <div className="rounded-lg border-2 border-gray-200 bg-gray-50 p-4 mb-6">
                  <div className="mb-2 flex items-center gap-2">
                    <Video className="h-5 w-5 text-[#0080FF]" />
                    <span className="font-semibold text-gray-900">20-Minute Video Call</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Meet with our education systems expert via Zoom
                  </p>
                </div>

                <button
                  disabled={!selectedDate || !selectedTime}
                  className="w-full rounded-xl bg-[#FF0040] px-8 py-4 font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#E6003A] disabled:cursor-not-allowed disabled:bg-gray-300 disabled:hover:scale-100"
                >
                  {selectedDate && selectedTime ? 'Confirm Booking' : 'Select Date & Time'}
                </button>

                <p className="mt-4 text-center text-xs text-gray-500">
                  You'll receive a confirmation email with the Zoom link
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
