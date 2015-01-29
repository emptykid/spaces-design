/*
 * Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*global define */

define(function (require, exports, module) {

    "use strict";

    module.exports = {
        APP_NAME: "Designshop",
        MENU: {
            APPLICATION: {
                $MENU: "Application",
                ABOUT: "About Designshop…",
                PREFERENCES: "Preferences…",
                HIDE_APPLICATION: "Hide Designshop",
                HIDE_OTHER_APPLICATIONS: "Hide Others",
                SHOW_ALL: "Show All",
                QUIT_APPLICATION: "Quit Designshop"
            },
            FILE: {
                $MENU: "File",
                NEW: "New",
                NEW_EXTENDED: "New…",
                NEW_FROM_TEMPLATE: {
                    $MENU: "New From Template",
                    TEMPLATE_ONE: "iPhone 6",
                    TEMPLATE_TWO: "Responsive Layout"
                },
                OPEN: "Open...",
                OPEN_RECENT: {
                    $MENU: "Open Recent",
                    RECENT_ENTRY_ONE: "A recent file",
                    RECENT_ENTRY_TWO: "Another recent file",
                    RECENT_ENTRY_THREE: "Yet another recent file"
                },
                CLOSE: "Close",
                SAVE: "Save",
                SAVE_AS: "Save As…",
                REVERT: "Revert",
                RENAME_DOCUMENT: "Rename…",
                GENERATE_ASSETS: "Generate Assets…",
                AUTO_GENERATE_IMAGE_ASSETS: "Auto Generate Assets",
                PLACE_EMBEDDED: "Place Embedded…",
                PLACE_LINKED: "Place Linked…",
                PACKAGE: "Package…",
                PRINT: "Print…"
            },
            EDIT: {
                $MENU: "Edit",
                UNDO: "Undo",
                REDO: "Redo",
                CUT: "Cut",
                CUT_ATTRIBUTES: "Cut Attributes | Style",
                COPY: "Copy",
                COPY_MERGED: "Copy Merged",
                COPY_ATTRIBUTES: "Copy Attributes | Style",
                COPY_CSS: "Copy CSS Attributes",
                PASTE: "Paste",
                PASTE_ATTRIBUTES: "Paste Attributes | Style",
                DELETE: "Delete",
                CLEAR_ATTRIBUTES: "Clear Attributes",
                DUPLICATE: "Duplicate Selection",
                DUPLICATE_WITH_OFFSET: "Duplicate Selection with Offset",
                SELECT_ALL: "Select All",
                DESELECT: "Deselect",
                INVERT_SELECTION: "Invert Selection"
            },
            LAYER: {
                $MENU: "Layer",
                CONVERT_TO_SMART_OBJECT: "Convert To Smart Object",
                FIND_LAYER: "Find Layer…",
                RENAME_LAYER: "Rename Layer…",
                MERGE_LAYERS: "Merge Layers",
                COMBINE: {
                    $MENU: "Combine",
                    COMBINE_UNITE: "Unite",
                    COMBINE_SUBTRACT: "Subtract",
                    COMBINE_UNION: "Union",
                    COMBINE_DIFFERENCE: "Difference"
                },
                TRANSFORM: {
                    $MENU: "Transform",
                    TRANSFORM_SCALE: "Scale",
                    TRANSFORM_ROTATE: "Rotate",
                    TRANSFORM_ROTATE_180: "Rotate 180º",
                    TRANSFORM_ROTATE_LEFT: "Rotate Left",
                    TRANSFORM_ROTATE_RIGHT: "Rotate Right"

                },
                CREATE_CLIPPING_MASK: "Create Clipping Mask"
            },
            TYPE: {
                $MENU: "Type",
                ADD_FONTS_FROM_TYPEKIT: "Add Fonts from Typekit…",
                BOLD: "Bold",
                ITALIC: "Italic",
                UNDERLINE: "Underline",
                CHANGE_CASE: {
                    $MENU: "Change Case",
                    LOWERCASE: "lowercase",
                    UPPERCASE: "UPPERCASE",
                    TITLECASE: "Title Case",
                    SENTENCECASE: "Sentence case"
                },
                INCREASE_FONT_SIZE: "Increase Size",
                DECREASE_FONT_SIZE: "Decrease Size",
                TEXT_SPACING_TIGHTEN: "Tighten Kerning | Letter Spacing",
                TEXT_SPACING_LOOSEN: "Loosen Kerning | Letter Spacing",
                LINEHEIGHT_INCREASE: "Raise Line Height",
                LINEHEIGHT_DECREASE: "Lower Line Height",
                ALIGN_TEXT: {
                    $MENU: "Align Text",
                    ALIGN_TEXT_LEFT: "Left",
                    ALIGN_TEXT_CENTER: "Center",
                    ALIGN_TEXT_RIGHT: "Right",
                    ALIGN_TEXT_JUSTIFY: "Justify"
                },
                SWASH: "Swash | …",
                OLD_STYLE: "Old Style | …",
                ORNAMENTS: "Ornaments | …",
                ORDINALS: "Ordinals | …",
                FRACTIONS: "Fractions | …",
                STANDARD_LIGATURES: "Standard Ligatures | …",
                DISCRETIONARY_LIGATURES: "Discretionary Ligatures | …",
                TITLING_ALTERNATES: "Titling Ligatures | …",
                CONTEXTUAL_ALTERNATES: "Contextual Alternates | …",
                STYLISTIC_ALTERNATES: "Stylistic Alternates | …",
                JUSTIFICATION_ALTERNATES: "Justification Alternates | …",
                CONVERT_TEXT_TO_OUTLINES: "Convert Text to Outlines"
            },
            ARRANGE: {
                $MENU: "Arrange",
                BRING_FORWARD: "Bring Forward",
                BRING_FRONT: "Bring to Front",
                SEND_BACKWARD: "Send Backward",
                SEND_TO_BACK: "Send to Back",
                LAYOUT_MAKE_GRID_OF_OBJECTS: "Make Grid of Objects…",
                LAYOUT_DIVIDE: "Divide…",
                LAYOUT_INSET: "Inset…",
                DISTRIBUTE: {
                    $MENU: "Distribute Objects",
                    DISTRIBUTE_HORIZONTAL: "Horizontally",
                    DISTRIBUTE_VERTICAL: "Vertically",
                    DISTRIBUTE_EVENLY: "Evenly"
                },
                ALIGN: {
                    $MENU: "Align Objects",
                    ALIGN_LEFT: "Left",
                    ALIGN_CENTER: "Center",
                    ALIGN_RIGHT: "Right",
                    ALIGN_TOP: "Top",
                    ALIGN_MIDDLE: "Middle",
                    ALIGN_BOTTOM: "Bottom"

                },
                FLIP_HORIZONTAL: "Flip Horizontal",
                FLIP_VERTICAL: "Flip Vertical",
                SWAP_POSITION: "Swap Position",
                LOCK_LAYER: "Lock",
                UNLOCK_LAYER: "Unlock",
                GROUP_LAYERS: "Group",
                UNGROUP_LAYERS: "Ungroup"
            },
            VIEW: {
                $MENU: "View",
                ZOOM_IN: "Zoom In",
                ZOOM_OUT: "Zoom Out",
                FIT_TO_WINDOW: "Fit to Window",
                ACTUAL_SIZE: "Actual Size",
                ZOOM_TO_SELECTION: "Zoom to Selection",
                CENTER_SELECTION: "Center Selection",
                FULLSCREEN_MENUBAR: "Full Screen with Menu Bar",
                FULLSCREEN: "Full Screen",
                PRESENTATION: "Presentation",
                SWITCH_TO_CLASSIC: "Switch to Classic Photoshop",
                TOGGLE_EXTRAS: "Show | Hide Extras",
                TOGGLE_RULERS: "Show | Hide Rulers",
                TOGGLE_SMART_GUIDES: "Show | Hide Smart Guides",
                TOGGLE_GUIDES: "Show | Hide Guides"
            },
            WINDOW: {
                $MENU: "Window",
                MINIMIZE: "Minimize",
                BRING_ALL_TO_FRONT: "Bring All to Front",
                NEXT_DOCUMENT: "Next Document",
                PREVIOUS_DOCUMENT: "Previous Document",
                OPEN_DOCUMENT_ONE: "Document Name 1",
                OPEN_DOCUMENT_TWO: "Document Name 2",
                OPEN_DOCUMENT_THREE: "…etc…"
            },
            HELP: {
                $MENU: "Help",
                RUN_TESTS: "Run Tests…"
            }
        },
        TITLE_PAGES: "LAYERS",
        TITLE_STYLE: "STYLE",
        TITLE_TRANSFORM: "TRANSFORM",
        TOOLS: {
                newSelect: "V - Select Tool",
                rectangle: "R - Rectangle Tool",
                ellipse: "E - Ellipse Tool",
                pen: "P - Pen Tool",
                typeCreateOrEdit: "T - Type Tool",
                eyedropper: "I - Sampler Tool"
        },
        TOOLTIPS: {
            SELECT_NEXT_DOCUMENT: "Select Next Document",
            SELECT_PREVIOUS_DOCUMENT: "Select Previous Document",
            DISTRIBUTE_HORIZONTALLY: "Distribute Horizontal Center",
            DISTRIBUTE_VERTICALLY: "Distribute Vertical Center",
            ALIGN_LEFT: "Align Left Edges",
            ALIGN_CENTER: "Align Horizontal Center",
            ALIGN_RIGHT: "Align Right Edges",
            ALIGN_TOP: "Align Top Edges",
            ALIGN_MIDDLE: "Align Vertical Center",
            ALIGN_BOTTOM: "Align Bottom Edges",
            SET_X_POSITION: "Set X Position",
            SET_Y_POSITION: "Set Y Position",
            SET_WIDTH: "Set Width",
            LOCK_PROPORTIONAL_TRANSFORM: "Lock Width & Height to Proportional",
            SET_HEIGHT: "Set Height",
            SET_ROTATION: "Set Rotation",
            FLIP_HORIZONTAL: "Flip Horizontal",
            FLIP_VERTICAL: "Flip Vertical",
            SWAP_POSITION: "Swap Position",
            SET_RADIUS: "Set Radius: Set individual corners x/x/x/x",
            SET_RADIUS_SLIDER: "Adjust Slider to Set Radius ",
            SET_OPACITY: "Set Opacity",
            VECTOR_SETTINGS: "Show Vector Settings",
            SET_COMBINATION: "Set Shape Combination",
            UNITE_SHAPE: "Unite Shape",
            SUBTRACT_SHAPE: "Subtract Shape",
            INTERSECT_SHAPE: "Intersect Shape",
            DIFFERENCE_SHAPE: "Difference Shape",
            SHOW_LOREM_IPSUM: "Show Lorem Ipsum",
            SHOW_GLYPHS: "Show Glyphs",
            TYPE_SETTINGS: "Show Type Settings",
            SET_TYPEFACE: "Set Typeface",
            SET_WEIGHT: "Set Weight",
            SET_TYPE_COLOR: "Set Text Color",
            SET_TYPE_SIZE: "Set Text Size",
            SET_LETTERSPACING: "Set Letterspacing",
            SET_LINESPACING: "Set Linespacing",
            SET_TYPE_ALIGNMENT: "Set Type Alignment",
            ALIGN_TYPE_LEFT: "Align Text Left",
            ALIGN_TYPE_CENTER: "Align Text Center",
            ALIGN_TYPE_RIGHT: "Align Text Right",
            ALIGN_TYPE_JUSTIFIED: "Justify Text",
            SET_STROKE_COLOR: "Set Stroke Color",
            SET_STROKE_OPACITY: "Set Stroke Opacity",
            SET_STROKE_SIZE: "Set Stroke Size",
            SET_STROKE_ALIGNMENT: "Set Stroke Alignment",
            TOGGLE_STROKE: "Toggle Stroke",
            SET_FILL_COLOR: "Set Fill Color",
            SET_FILL_OPACITY: "Set Fill Opacity",
            SET_FILL_BLENDING: "Set Fill Blending",
            TOGGLE_FILL: "Toggle Fill",
            SET_LAYER_VISIBILITY: "Set Layer Visibility",
            LOCK_LAYER: "Lock Layer",
            LAYER_COUNT: "Number of layers selected",
            TOGGLE_DROP_SHADOW: "Toggle Drop Shadow",
            SET_DROP_SHADOW_COLOR: "Set Drop Shadow Color",
            SET_DROP_SHADOW_PROPS: "Set Drop Shadow Dimensions",
            SET_DROP_SHADOW_X_POSITION: "Set Drop Shadow X Position",
            SET_DROP_SHADOW_Y_POSITION: "Set Drop Shadow Y Position",
            SET_DROP_SHADOW_BLUR: "Set Drop Shadow Blur",
            SET_DROP_SHADOW_SPREAD: "Set Drop Shadow Spread",
            SET_COLOR_PICKER_FORMAT: "Set Color Picker Format",
            SET_COLOR_PICKER_MODE: "Set Color Picker Mode",
            SECTION_SNIPPET: " section: double-click to collapse"
        },
        LAYER_KIND: {
            0: "Any Layer",
            1: "Pixel Layer",
            2: "Adjustment Layer",
            3: "Text Layer",
            4: "Vector Layer",
            5: "Smart Object Layer",
            6: "Video Layer",
            7: "Group Layer",
            8: "3D Layer",
            9: "Gradient Layer",
            10: "Pattern Layer",
            11: "Solidcolor Layer",
            12: "Background Layer",
            13: "Groupend Layer"
        },
        COLOR_PICKER: {
            FORMAT: "Format",
            MODE: {
                SOLID: "Solid",
                GRADIENT: "Gradient",
                PATTERN: "Pattern"
            }
        },
        TRANSFORM: {
            X: "X",
            Y: "Y",
            W: "W",
            H: "H",
            RADIUS: "Radius",
            ROTATE: "Rotate",
            MIXED: "mixed"
        },
        STYLE: {
            BLEND: {
                NORMAL:"Normal",
                DISSOLVE: "Dissolve",
                DARKEN: "Darken",
                LIGHTEN: "Lighten",
                SCREEN: "Screen",
                OVERLAY: "Overlay",
                MULTIPLY: "Multiply",
                COLORBURN: "Color Burn",
                LINEARBURN: "Linear Burn",
                DARKERCOLOR: "Darker Color",
                PASSTHROUGH: "Pass Through"
            },
            OPACITY: "Opacity",
            FILL: {
                TITLE: "Fill",
                ALPHA: "Alpha",
                BLENDING: "Blending"
            },
            STROKE: {
                TITLE: "Stroke",
                ALPHA: "Alpha",
                SIZE: "Size",
                ALIGNMENT: "Align"
            },
            DROP_SHADOW: {
                TITLE: "Drop Shadows",
                X_POSITION: "X",
                Y_POSITION: "Y",
                BLUR: "Blur",
                SPREAD: "Spread"
            },
            TYPE: {
                TITLE: "Type",
                TYPEFACE: "Typeface",
                WEIGHT: "Weight",
                SIZE: "Size",
                LETTER: "Letter",
                LINE: "Line",
                ALIGN: "Align",
                AUTO_LEADING: "auto",
                MISSING: "missing"
            },
            VECTOR: {
                TITLE: "Vector",
                COMBINE: "Combine"
            }
        }
    };
});
