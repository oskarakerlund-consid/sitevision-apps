/**
 * Interface to "Secret store".
 *
 * <p>
 *    The store contains secrets about the current user, which are encrypted, typically by using the password of the user.
 * </p>
 *
 * <p>
 *    The secret store can be accessed by casting the user object to this interface. The user object can be
 *    accessed through the Portlet API (request.getUserPrincipal()) or by using the principal in the Subject through JAAS.
 * </p>
 * @author Rickard Öberg
 * @see Secret
 */
interface SecretStore {
  /**
   * Sets a secret for a specified key.
   * @param aKey the identifier for secret
   * @param aSecret the secret
   */
  setSecret(aKey: unknown, aSecret: unknown): void;

  /**
   * Gets a secret for a specified key.
   * @param aKey the identifier for a secret
   * @return a secret
   */
  getSecret(aKey: unknown): unknown;

  /**
   * Removes a secret for a specified key.
   * @param aKey the identifier for a secret
   */
  removeSecret(aKey: unknown): void;

  /**
   * Gets all secrets.
   * @return a map of secrets
   */
  getSecrets(): unknown;

  /**
   * Sets a map of secrets.
   * @param aSecrets the secrets
   */
  setSecrets(aSecrets: unknown): void;

  /**
 * 
  
    */
  removeAllSecrets(): void;
}

export default SecretStore;
