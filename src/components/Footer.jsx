import React from 'react';

const Footer = () => (
  <footer className="border-t bg-slate-50 dark:bg-[#111827]">
    <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
      <div className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-emerald-500">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span className="text-xl font-bold">Civix</span>
      </div>
      <nav className="flex flex-wrap gap-4 md:gap-6">
        <a href="/about" className="text-sm font-medium hover:text-emerald-500 transition-colors duration-300">About</a>
        <a href="/#features" className="text-sm font-medium hover:text-emerald-500 transition-colors duration-300">Features</a>
        <a href="/privacy" className="text-sm font-medium hover:text-emerald-500 transition-colors duration-300">Privacy</a>
        <a href="/terms" className="text-sm font-medium hover:text-emerald-500 transition-colors duration-300">Terms</a>
        <a href="/contact" className="text-sm font-medium hover:text-emerald-500 transition-colors duration-300">Contact</a>
      </nav>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/HarshS16/Civix"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium transition-colors duration-300 hover:text-emerald-500 dark:hover:text-green-400"
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 118 118"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-black hover:stroke-emerald-500 dark:stroke-white dark:hover:stroke-green-400 transition-colors duration-300"
          >
            <path
              d="M49.1666 101.124C32.3095 106.814 18.2619 101.124 9.83331 83.5833"
              strokeWidth="8.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M49.1666 108.167V92.2263C49.1666 89.2847 50.0708 86.728 51.5286 84.4187C52.5287 82.834 51.8438 80.5861 50.0374 80.0895C35.0752 75.9763 24.5833 69.3628 24.5833 47.4264C24.5833 41.7234 26.4519 36.3615 29.7365 31.6948C30.554 30.5334 30.9626 29.9527 31.0609 29.4267C31.1592 28.9008 30.9884 28.2144 30.6466 26.8416C29.256 21.2543 29.3461 15.3213 31.4333 9.97212C31.4333 9.97212 35.7462 8.56688 45.5626 14.6993C47.8038 16.0995 48.9245 16.7995 49.9115 16.9561C50.8983 17.1127 52.2179 16.7847 54.8567 16.1287C58.4655 15.2316 62.184 14.75 66.375 14.75C70.5659 14.75 74.2844 15.2316 77.8933 16.1287C80.532 16.7847 81.8517 17.1127 82.8384 16.9561C83.8257 16.7995 84.9462 16.0995 87.1872 14.6993C97.0039 8.56688 101.317 9.97212 101.317 9.97212C103.404 15.3213 103.494 21.2543 102.103 26.8416C101.762 28.2144 101.591 28.9008 101.689 29.4267C101.787 29.9527 102.196 30.5334 103.013 31.6948C106.298 36.3615 108.167 41.7234 108.167 47.4264C108.167 69.3628 97.675 75.9763 82.7126 80.0895C80.9062 80.5861 80.2213 82.834 81.2213 84.4187C82.6791 86.728 83.5833 89.2847 83.5833 92.2263V108.167"
              strokeWidth="8.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="sr-only">GitHub</span>
        </a>
      </div>

      <p className="text-center text-sm text-muted-foreground dark:text-muted-foreground">© {new Date().getFullYear()} Civix. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
