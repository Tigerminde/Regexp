import Validator from '../app';

test('Успешная валидация Alan', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Alan');
  expect(received).toBe(true);
});

test('Успешная валидация Jery', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Jery');
  expect(received).toBe(true);
});

test('Успешная валидация Novikov', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Novikov');
  expect(received).toBe(true);
});

test('Начинается с цифры', () => {
  const validator = new Validator();
  const received = validator.validateUsername('320i');
  expect(received).toBe(false);
});

test('Заканчивается цифрой', () => {
  const validator = new Validator();
  const received = validator.validateUsername('T100');
  expect(received).toBe(false);
});

test('Более трех цифр подряд', () => {
  const validator = new Validator();
  const received = validator.validateUsername('T1000new');
  expect(received).toBe(false);
});

test('Кириллица', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Призрак');
  expect(received).toBe(false);
});

test('Начинается с тире', () => {
  const validator = new Validator();
  const received = validator.validateUsername('-gun');
  expect(received).toBe(false);
});

test('Заканчивается подчеркиванием', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Medmax_');
  expect(received).toBe(false);
});
