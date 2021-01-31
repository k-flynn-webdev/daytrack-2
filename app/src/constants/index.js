// todo : Add default func objects in each object

export const VARS = {
  name: 'Daytrack',
  pageLimit: 20,
  sort: {
    direction: [
      { name: 'asc', value: 1 },
      { name: 'desc', value: -1 }
      ],
    types: [
      { name: 'created', value: 'created_at' },
      { name: 'updated', value: 'updated_at' },
      { name: 'done', value: 'done_at' },
    ]
  },
  userLocal: 'user-local'
}

export const CSRF = {
  value: 'csrf',
  API: {
    GET: '/api/csrf/',
  }
}

/**
 * Check Email input is valid
 *
 * @param   {string}    input   Email string to check
 * @returns {boolean}
 */
function checkEmail (input) {
  return (input &&
      input.split('@').length > 1 &&
      input.split('.').length > 1)
}
/**
 * Check Password input is valid
 *
 * @param   {string}    input   Password string to check
 * @returns {boolean}
 */
function checkPassword (input) {
  return (input && input.length >= 8)
}

export const REGISTER = {
  value: 'login',
  route: { name: 'login', path: '/login' },
  API: {
    POST: '/rest-auth/register'
  },
  isValid: (input) => {
    return (input &&
        input.email &&
        input.password &&
        checkEmail(input.email) &&
        checkPassword(input.password))
  }
}

export const LOGIN = {
  value: 'login',
  route: { name: 'login', path: '/login' },
  API: {
    POST: '/rest-auth/login/'
  },
  isValid: (input) => {
    return (input &&
        input.email &&
        input.password &&
        checkEmail(input.email) &&
        checkPassword(input.password))
  }
}

export const LOGOUT = {
  value: 'logout',
  route: { name: 'logout', path: '/logout' },
  API: {
    DELETE: '/rest-auth/logout/'
  }
}

// export const VERIFY = {
//   value: 'verify',
//   route: { name: 'verify', path: '/verify' },
//   API: { GET: '/api/verify' }
// }
//
// export const RECOVER = {
//   value: 'recover',
//   route: { name: 'recover', path: '/recover' },
//   API: {
//     GET: '/api/recover',
//     PATCH: '/api/recover'
//   }
// }

export const USER = {
  value: 'user',
  store: 'user',
  route: { name: 'user', path: '/user' },
  API: {
    GET: '/rest-auth/user/'
  }
}

// export const ADMIN = {
//   value: 'admin',
//   store: 'admin',
//   route: { name: 'admin', path: '/admin' },
//   API: {
//     GET: '/api/admin/me',
//     POST: '/api/admin',
//     PATCH: '/api/admin',
//     DELETE: '/api/admin',
//   }
// }

export const TRACK = {
  value: 'track',
  store: 'tracks',
  route: {
    name: 'home',
    path: '/home',
  },
  API: {
    POST: '/api/track/',
    PATCH: '/api/track/',
    DELETE: '/api/track/',
  },
  isValid: (input) => { return input &&
      input.value &&
      input.value.length >= 4 }
}

export const TRACKS = {
  value: 'track',
  store: 'tracks',
  route: {
    name: 'home',
    path: '/home',
  },
  API: {
    GET: '/api/track/',
  },
}

//
// export const PLAN = {
//   index: 2,
//   text: 'plans',
//   value: 'plan',
//   store: 'plans',
//   parent: 'project',
//   child: 'task',
//   children: ['plan', 'task'],
//   route: {
//     name: 'plan',
//     path: '/plans',
//   },
//   API: {
//     GET: '/api/plans',
//     POST: '/api/plans',
//     PATCH: '/api/plans',
//     DELETE: '/api/plans',
//   }
// }
//
// export const TASK = {
//   index: 1,
//   text: 'tasks',
//   value: 'task',
//   store: 'tasks',
//   parent: 'plan',
//   child: null,
//   children: ['task'],
//   route: {
//     name: 'task',
//     path: '/tasks',
//   },
//   API: {
//     GET: '/api/tasks',
//     POST: '/api/tasks',
//     PATCH: '/api/tasks',
//     DELETE: '/api/tasks',
//   }
// }
//
// export const HOME = {
//   value: 'Minitask',
//   route: {
//     name: 'home',
//     path: '/',
//   }
// }

// export const TYPES = {
//   home: HOME,
//   project: PROJECT,
//   plan: PLAN,
//   task: TASK
// }

export const ALL = {
  VARS,
  CSRF,
  USER,
  LOGIN,
  LOGOUT,
  REGISTER,
  // VERIFY,
  // RECOVER,
  // ADMIN,
  TRACK,
  TRACKS,
  // PLAN,
  // TASK,
  // HOME,
  // TYPES
}
