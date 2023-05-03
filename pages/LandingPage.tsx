import React from 'react';
import FlashcardApp from "../components/FlashcardApp";
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto p-8">
        <section className="text-center mb-8">
          <h2 className="text-4xl font-semibold mb-4">Welcome to FlashFormer</h2>
          <p className="text-lg">
            The ultimate solution for flashcard generation, text-to-JSON conversion, and report generation based on templates.
          </p>
        </section>
        <section>
          <FlashcardApp />
        </section>
      </main>
    </div>
  );
};

export default LandingPage;