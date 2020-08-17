import { writable } from "svelte/store";

export const store = writable([
  {
    id: 1,
    foo: "bar",
  },
  {
    id: 2,
    foo: "baz",
  },
  {
    id: 3,
    foo: "bar",
  },
  {
    id: 4,
    foo: "baz",
  },
]);
