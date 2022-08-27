import { MyComponent, BongaButton } from '@bongaui/core-components-react';

export function App() {
  return (
    <div>
      <h2>El componente de sebas</h2>
      <MyComponent first="First name" last="Last name" />
      <h2>Bonga Button</h2>
      <BongaButton color="primary">Primary</BongaButton>
      <BongaButton color="secondary">Secondary</BongaButton>
      <BongaButton color="tertiary">Tertiary</BongaButton>
      <BongaButton>Default</BongaButton>

      <h2>Block Width</h2>
      <BongaButton color="primary" expand="block">
        A block button
      </BongaButton>

      <h2>Full Width</h2>
      <BongaButton color="secondary" expand="full">
        A full-width button
      </BongaButton>
    </div>
  );
}

export default App;
