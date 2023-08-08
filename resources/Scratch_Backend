const Scratch = {
  Cast: {
    toNumber: Number,
    toString: String,
    toBoolean: Boolean,
    compare: (e, n) => ((e = Number(e)) > (n = Number(n)) ? 1 : e < n ? -1 : 0),
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
      let n = window.vm.extensionManager._registerInternalExtension(e);
      window.vm.extensionManager._loadedExtensions.set(e.getInfo().id, n);
    },
  },
  canFetch: () => !0,
  openWindow(e, n) {
    if (null == (n = n || null)) {
      window.open(e);
      return;
    }
    window.open(e, "_blank", n);
  },
  redirect(e) {
    location.href = e;
  },
};
window.Scratch = Scratch;
