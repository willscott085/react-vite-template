import { renderHook, act, fireEvent } from '@testing-library/react';
import { useKeyboard } from './useKeyboard';
import { vi } from 'vitest';

test('should fire callback when key is pressed', () => {
  const cb = vi.fn();
  renderHook(() => useKeyboard('k', cb));

  act(() => {
    fireEvent.keyDown(document.body, { key: 'k', metaKey: true });
  });

  expect(cb).toHaveBeenCalledTimes(1);
  expect(cb).toHaveBeenCalledWith(expect.any(KeyboardEvent));
});
