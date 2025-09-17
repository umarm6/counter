/**
 * Returns a mapping of user roles to their occurrence counts.
 *
 * @param {Array<{ id: number, name: string, role?: string }>} users - List of user objects.
 * @returns {Record<string, number>} Map from role to count.
 */
const countByRole = (users) => {
  return users.reduce((roleMap, { role }) => {
    const userRole = role ?? 'unknown';
    roleMap[userRole] = (roleMap[userRole] ?? 0) + 1;
    return roleMap;
  }, {});
};

module.exports = { countByRole };
