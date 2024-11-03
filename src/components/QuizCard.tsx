import React from 'react';
import { HistoricalEvent } from '../data/events';
import { CheckCircle2, XCircle } from 'lucide-react';

interface QuizCardProps {
  event: HistoricalEvent;
  onAnswer: (year: number) => void;
  isAnswered: boolean;
  selectedAnswer: number | null;
}

export function QuizCard({ event, onAnswer, isAnswered, selectedAnswer }: QuizCardProps) {
  const isCorrect = selectedAnswer === event.correctYear;

  return (
    <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">{event.description}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {event.options.map((year) => (
          <button
            key={year}
            onClick={() => !isAnswered && onAnswer(year)}
            className={`
              py-3 px-6 rounded-lg text-lg font-medium transition-all
              ${isAnswered
                ? year === event.correctYear
                  ? 'bg-green-100 text-green-700 border-2 border-green-500'
                  : year === selectedAnswer
                    ? 'bg-red-100 text-red-700 border-2 border-red-500'
                    : 'bg-gray-100 text-gray-500'
                : 'bg-blue-50 hover:bg-blue-100 text-blue-700 hover:shadow-md'}
            `}
            disabled={isAnswered}
          >
            {year}
          </button>
        ))}
      </div>

      {isAnswered && (
        <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
          <div className="flex items-center gap-2 mb-2">
            {isCorrect ? (
              <>
                <CheckCircle2 className="text-green-600 w-6 h-6" />
                <span className="text-green-700 font-medium">¡Correcto!</span>
              </>
            ) : (
              <>
                <XCircle className="text-red-600 w-6 h-6" />
                <span className="text-red-700 font-medium">Incorrecto. La fecha correcta es {event.correctYear}.</span>
              </>
            )}
          </div>
          <p className="text-gray-700">{event.additionalInfo}</p>
        </div>
      )}
    </div>
  );
}