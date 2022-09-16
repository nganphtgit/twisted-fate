export function testRequiredField(value, field) {
  if (!value.length) {
    return `${field} không được để trống.`;
  }
  return '';
};