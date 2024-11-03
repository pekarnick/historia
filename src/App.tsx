import React, { useState } from 'react';
import { historicalEvents } from './data/events';
import { QuizCard } from './components/QuizCard';
import { BookOpen } from 'lucide-react';

function App() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const handleAnswer = (year: number) => {
    setSelectedAnswer(year);
    if (year === historicalEvents[currentEventIndex].correctYear) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentEventIndex < historicalEvents.length - 1) {
      setCurrentEventIndex(currentEventIndex + 1);
      setSelectedAnswer(null);
    }
  };

  const handleRestart = () => {
    setCurrentEventIndex(0);
    setSelectedAnswer(null);
    setScore(0);
  };

  const currentEvent = historicalEvents[currentEventIndex];
  const isLastQuestion = currentEventIndex === historicalEvents.length - 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-800">Historia en Fechas</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Pon a prueba tu conocimiento de eventos históricos
          </p>
        </div>

        <div className="mb-6 flex justify-between items-center">
          <div className="text-gray-700">
            Pregunta {currentEventIndex + 1} de {historicalEvents.length}
          </div>
          <div className="text-indigo-700 font-medium">
            Puntuación: {score} / {historicalEvents.length}
          </div>
        </div>

        <QuizCard
          event={currentEvent}
          onAnswer={handleAnswer}
          isAnswered={selectedAnswer !== null}
          selectedAnswer={selectedAnswer}
        />

        <div className="mt-8 flex justify-center">
          {selectedAnswer !== null && (
            <button
              onClick={isLastQuestion ? handleRestart : handleNext}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              {isLastQuestion ? 'Volver a empezar' : 'Siguiente pregunta'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;