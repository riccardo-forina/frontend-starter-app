interface ChromeAPI {
  getEnvironment: () => string;
  isProd: boolean;
  isBeta: () => boolean;
  getBundle: () => string;
  getApp: () => string;
  auth: {
    getToken: () => Promise<string>;
    getUser: () => Promise<{
      identity?: {
        user?: {
          is_org_admin?: boolean;
          username?: string;
          email?: string;
        };
      };
    }>;
  };
  appAction: (action: string | undefined) => void;
  updateDocumentTitle: (title: string) => void;
}

export default function useChrome(): ChromeAPI {
  return {
    getEnvironment: () => 'stage',
    isProd: false,
    isBeta: () => false,
    getBundle: () => 'staging',
    getApp: () => 'starter',
    auth: {
      getToken: () => Promise.resolve('mock-token'),
      getUser: () =>
        Promise.resolve({
          identity: {
            user: {
              is_org_admin: false,
              username: 'test-user',
              email: 'test@redhat.com',
            },
          },
        }),
    },
    appAction: () => {},
    updateDocumentTitle: (title: string) => {
      if (typeof document !== 'undefined') {
        document.title = title;
      }
    },
  };
}

export { useChrome };
