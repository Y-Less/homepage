import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { HeadContent } from '../components/HeadContent';
import Wordmark from '../components/icons/Wordmark';
import Discord from '../components/icons/Discord';
import Forum from '../components/icons/Forum';

import { loadLanguages } from '../components/languages';

export default ({ url: { query: { lang: initialLang } } }) => {
  const [ currentLanguage, flags, selected, callback ] = loadLanguages(initialLang, useState('xx'));

  return (
    <div className="container">
      <HeadContent
        flags={flags}
        selected={selected}
        callback={callback}
        title="FAQ"
      />

      <main>
        <header className="header">
          <Wordmark width={300} height="100%" stroke="#d1cec8" background="#161f2b" />
        </header>
        <section className="content">
          {currentLanguage.body(
            ({ children }) => <Link href={`/faq?lang=${selected}`}>{children}</Link>
          )}
          <hr />
          <p>
            <span className="icon">
              <a href="https://discordapp.com/invite/hURGKHJ">
                <Discord />
              </a>
            </span>
            <span className="icon">
              <a href="https://www.burgershot.gg">
                <Forum />
              </a>
            </span>
          </p>
        </section>
      </main>
    </div>
  );
};

