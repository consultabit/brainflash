import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold">
          Flashcard Generator
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/decks" className="hover:text-indigo-300">
                Decks
              </Link>
            </li>
            <li>
              <Link href="/auto-generate" className="hover:text-indigo-300">
                Auto-Generate
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-indigo-300">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;