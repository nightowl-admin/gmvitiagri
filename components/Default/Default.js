import React from 'react';
import style from './Default.module.scss';

export default function Header() {
  return (
    <section>
      <div className={style.defaultWrapper}>
        <h1>Default</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosq.
        </p>
      </div>
    </section>
  );
}
