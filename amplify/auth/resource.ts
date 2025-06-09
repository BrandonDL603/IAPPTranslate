
import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    externalSaml: {
      providerName: 'EntraSSO',
      metadataUrl: 'https://login.microsoftonline.com/56a51620-6c5b-4c7b-a71b-845bbe83069a/federationmetadata.xml',
      callbackUrls: ['https://dev.d2uluvkyv859go.amplifyapp.com/'],
      logoutUrls: ['https://dev.d2uluvkyv859go.amplifyapp.com/'],
    }
  }
});
