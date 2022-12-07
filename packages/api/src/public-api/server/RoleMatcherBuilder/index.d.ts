import Node from "../../hidden/javax/jcr/Node";
import RoleMatcher from "../../hidden/senselogic/sitevision/api/security/RoleMatcher";
import Builder from "../../hidden/senselogic/sitevision/api/base/Builder";

/**
 * Sets the user (sv:user, sv:simpleUser).
 * @param aUser the user
 * @return this builder
 */
export function setUser(aUser: Node): RoleMatcherBuilder;

/**
 * Adds a role (sv:role).
 * @param aRole the role to add
 * @return this builder
 */
export function addRole(aRole: Node): RoleMatcherBuilder;

/**
 * Clears the state of this builder.
 *
 * <p>
 *    Sets the <em>user</em> and the <em>roles</em> to null.
 * </p>
 * @return this builder
 */
export function clear(): RoleMatcherBuilder;

/**
 * Creates a read-only RoleMatcher instance using current state of this builder.
 * @return a RoleMatcher instance
 * @throws IllegalStateException if user is not properly set or if no roles are added
 */
export function build(): RoleMatcher;

/**
 * Builder of RoleMatcher instances.
 *
 * <p>
 *    <em>Tip!</em> The {@link senselogic.sitevision.api.base.Builder Builder interface documentation} contains
 *    more information about Builders and how to work with them!
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link RoleUtil#getRoleMatcherBuilder()}.
 *    See {@link RoleUtil} for how to obtain an instance of the <code>RoleUtil</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 6.1
 */
declare namespace roleMatcherBuilder {
  export { setUser, addRole, clear, build };
}

export default roleMatcherBuilder;
