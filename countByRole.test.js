const { countByRole } = require('./countByRole');

describe('countByRole', () => {
  it('returns correct counts for typical roles', () => {
    const users = [
      { id: 1, name: 'Alice', role: 'admin' },
      { id: 2, name: 'Bob', role: 'user' },
      { id: 3, name: 'Charlie', role: 'admin' },
      { id: 4, name: 'David', role: 'user' }
    ];
    const result = countByRole(users);
    expect(result).toEqual({ admin: 2, user: 2 });
  });

  it('assigns unknown when role is missing', () => {
    const users = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob', role: 'user' },
      { id: 3, name: 'Charlie' }
    ];
    const result = countByRole(users);
    expect(result).toEqual({ unknown: 2, user: 1 });
  });

  it('handles empty users array', () => {
    expect(countByRole([])).toEqual({});
  });

  it('counts a single user with and without role', () => {
    expect(countByRole([{ id: 1, name: 'Alice', role: 'admin' }])).toEqual({ admin: 1 });
    expect(countByRole([{ id: 2, name: 'Bob' }])).toEqual({ unknown: 1 });
  });

  it('correctly counts multiple unknown roles', () => {
    const users = [
      { id: 1, name: 'Eva' },
      { id: 2, name: 'Frank' }
    ];
    expect(countByRole(users)).toEqual({ unknown: 2 });
  });

  it('handles roles with undefined and null values', () => {
    const users = [
      { id: 1, name: 'Grace', role: null },
      { id: 2, name: 'Heidi', role: undefined }
    ];
    expect(countByRole(users)).toEqual({ unknown: 2 });
  });
});
