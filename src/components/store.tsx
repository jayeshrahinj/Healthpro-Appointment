import { createStore } from '@stencil/store';

const { state, onChange } = createStore({
  username: null
});

export { state, onChange };