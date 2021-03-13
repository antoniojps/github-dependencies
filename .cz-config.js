module.exports = {
  types: [
    { value: 'feat', name: 'feat:     A new feature' },
    { value: 'fix', name: 'fix:      A bug fix' },
    { value: 'docs', name: 'docs:     documentation only changes' },
    {
      value: 'style',
      name:
        'style:    changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
    },
    {
      value: 'perf',
      name: 'perf:     a code change that improves performance',
    },
    {
      value: 'refactor',
      name: 'refactor: a code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'cleanup',
      name: 'cleanup:  remove unused code',
    },
    {
      value: 'chore',
      name: "chore:    other changes that don't modify src or test files",
    },
    { value: 'tests', name: 'tests:    tests or update snapshots' },
  ],
  scopes: [
    { name: 'web', description: 'anything apps/web specific' },
    { name: 'components', description: 'anything packages/components specific' },
    { name: 'parser-dependencies', description: 'anything packages/parser-dependencies specific' },
    { name: 'types', description: 'anything packages/types specific' },
    { name: 'services', description: 'anything packages/services specific' },
    { name: 'lib', description: 'anything related to libs' },
    {
      name: 'testing',
      description: 'anything testing specific (e.g., jest)',
    },
    {
      name: 'repo',
      description: 'anything related to managing the repo itself',
    },
    { name: 'misc', description: 'misc stuff' },
  ],
  allowTicketNumber: true,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',
  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: 'Write a SHORT, IMPERATIVE (lowercase) description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },
  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['ticketNumber'],
  // limit subject length
  subjectLimit: 100,
};
