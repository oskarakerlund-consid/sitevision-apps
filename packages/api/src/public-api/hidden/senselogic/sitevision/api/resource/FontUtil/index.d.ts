import Node from "../../../../../javax/jcr/Node";

/**
 * Utility interface for Fonts.
 *
 * <p>
 * An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getFontUtil()}.
 * See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 */

interface FontUtil {
  /**
   * Gets the font with a given font name
   * @param aFontName the name of the font
   * @return the first font with name aFontName, or <code>null</code> if no font matches
   */
  getFontByName(aFontName: java.lang.String): Node;

  /**
   * Gets the font with a given font name with a fallback value if no font matches
   * @param aFontName the name of the font
   * @param aDefaultValue fallback value
   * @return the first font with name aFontName, or aDefaultValue if no font matches
   */
  getFontByName(aFontName: java.lang.String, aDefaultValue: Node): Node;

  /**
   * Gets the font with a given class name
   * @param aClassName the class name of the font
   * @return the first font with class name aClassName, or <code>null</code> if no font matches
   */
  getFontByClassName(aClassName: java.lang.String): Node;

  /**
   * Gets the font with a given class name with a fallback value if no font matches
   * @param aClassName the class name of the font
   * @param aDefaultValue fallback value
   * @return the first font with class name aClassName, or aDefaultValue if no font matches
   */
  getFontByClassName(aClassName: java.lang.String, aDefaultValue: Node): Node;
}
