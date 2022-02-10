import {createCalculateUI} from "./createCalculateUI.js";

describe('Module createCalculateUI', () => {
  let el;
  beforeEach(() => {
    el = document.createElement('div');
    createCalculateUI(el);
  });

  it('function createCalculateUI exists', () => {
    expect(createCalculateUI).toBeInstanceOf(Function);
  });
  it('create basic markup', () => {
    expect(el.querySelector('input')).toBeTruthy();
    expect(el.querySelector('button')).toBeTruthy();
    expect(el.querySelector('ul.history')).toBeTruthy();
  });
  it("clears input on button click", () => {
    el.querySelector('input').value = "123";
    el.querySelector('button').click();
    expect(el.querySelector('input').value).toBe("");
  });
  it("add history item on button click", () => {
    el.querySelector('input').value = "2 + 3";
    el.querySelector('button').click();
    let li = el.querySelector('ul.history').innerHTML;
    expect(el.querySelector('ul.history').innerHTML).toBe("<li>2 + 3 = 5</li>");
  })
});