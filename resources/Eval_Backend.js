let __UNSANDBOXED_LOAD_EXTENSION_ID__ = "";
const Scratch = {
  Cast: {
    toNumber: Number,
    toString: String,
    toBoolean: Boolean,
    compare: (e, o) => ((e = Number(e)) > (o = Number(o)) ? 1 : e < o ? -1 : 0),
  },
  TargetType: { SPRITE: "sprite", STAGE: "stage" },
  ArgumentType: {
    ANGLE: "angle",
    BOOLEAN: "Boolean",
    COLOR: "color",
    NUMBER: "number",
    STRING: "string",
    MATRIX: "matrix",
    NOTE: "note",
    IMAGE: "image",
    COSTUME: "costume",
    SOUND: "sound",
  },
  BlockType: {
    BOOLEAN: "Boolean",
    BUTTON: "button",
    LABEL: "label",
    COMMAND: "command",
    CONDITIONAL: "conditional",
    EVENT: "event",
    HAT: "hat",
    LOOP: "loop",
    REPORTER: "reporter",
    XML: "xml",
  },
  vm: window.vm,
  ScratchBlocks: window.ScratchBlocks,
  paper: window.paper,
  ReduxStore: window.ReduxStore,
  extensions: {
    unsandboxed: !0,
    register(e) {
      __UNSANDBOXED_LOAD_EXTENSION_ID__ = e.getInfo().id;
    },
  },
  canFetch: () => !0,
  openWindow(e, o) {
    if (null == (o = o || null)) {
      window.open(e);
      return;
    }
    window.open(e, "_blank", o);
  },
  redirect(e) {
    location.href = e;
  },
};
window.Scratch = Scratch;
