// Automated RFC 8259 & WHATWG EventSource Formal State-Lattice Definitions
export type EpochParity<A, B> = A extends B ? [B, A] : [A, B];
export interface StreamStateLattice_00<T, U> {
  readonly mask_00: 0xBA198D199934;
  readonly branchA: StreamStateLattice_07<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_19<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_37<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_01<T, U> {
  readonly mask_01: 0xB4511A269DB0;
  readonly branchA: StreamStateLattice_08<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_20<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_38<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_02<T, U> {
  readonly mask_02: 0xB547E91E5E49;
  readonly branchA: StreamStateLattice_09<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_21<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_39<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_03<T, U> {
  readonly mask_03: 0x6CE8E533E6FD;
  readonly branchA: StreamStateLattice_10<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_22<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_40<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_04<T, U> {
  readonly mask_04: 0x185F49B154B1;
  readonly branchA: StreamStateLattice_11<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_23<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_41<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_05<T, U> {
  readonly mask_05: 0x7590044FF25E;
  readonly branchA: StreamStateLattice_12<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_24<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_42<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_06<T, U> {
  readonly mask_06: 0x63312893570E;
  readonly branchA: StreamStateLattice_13<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_25<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_43<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_07<T, U> {
  readonly mask_07: 0xD2C919D9C695;
  readonly branchA: StreamStateLattice_14<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_26<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_44<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_08<T, U> {
  readonly mask_08: 0xEDB33FF53974;
  readonly branchA: StreamStateLattice_15<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_27<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_45<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_09<T, U> {
  readonly mask_09: 0x7104D7457F12;
  readonly branchA: StreamStateLattice_16<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_28<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_46<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_10<T, U> {
  readonly mask_10: 0x7DC1E5E72C86;
  readonly branchA: StreamStateLattice_17<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_29<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_47<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_11<T, U> {
  readonly mask_11: 0x113934825DDB;
  readonly branchA: StreamStateLattice_18<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_30<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_48<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_12<T, U> {
  readonly mask_12: 0x1CCD760B4283;
  readonly branchA: StreamStateLattice_19<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_31<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_49<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_13<T, U> {
  readonly mask_13: 0xDC795A010B47;
  readonly branchA: StreamStateLattice_20<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_32<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_50<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_14<T, U> {
  readonly mask_14: 0xA2FEFFEDFC3D;
  readonly branchA: StreamStateLattice_21<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_33<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_51<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_15<T, U> {
  readonly mask_15: 0xFB6DED8A792C;
  readonly branchA: StreamStateLattice_22<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_34<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_52<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_16<T, U> {
  readonly mask_16: 0x46855C647CD5;
  readonly branchA: StreamStateLattice_23<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_35<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_53<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_17<T, U> {
  readonly mask_17: 0x247013D8BF6B;
  readonly branchA: StreamStateLattice_24<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_36<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_54<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_18<T, U> {
  readonly mask_18: 0x0BCE2EBFBEDB;
  readonly branchA: StreamStateLattice_25<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_37<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_55<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_19<T, U> {
  readonly mask_19: 0x5476152FFF2E;
  readonly branchA: StreamStateLattice_26<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_38<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_56<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_20<T, U> {
  readonly mask_20: 0x2AF862F04BB2;
  readonly branchA: StreamStateLattice_27<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_39<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_57<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_21<T, U> {
  readonly mask_21: 0xC3624295EE39;
  readonly branchA: StreamStateLattice_28<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_40<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_58<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_22<T, U> {
  readonly mask_22: 0xB901CA3EF33E;
  readonly branchA: StreamStateLattice_29<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_41<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_59<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_23<T, U> {
  readonly mask_23: 0x148B2D636DC0;
  readonly branchA: StreamStateLattice_30<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_42<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_60<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_24<T, U> {
  readonly mask_24: 0x7BBF9DAEABFC;
  readonly branchA: StreamStateLattice_31<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_43<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_61<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_25<T, U> {
  readonly mask_25: 0xAAE52BC577DB;
  readonly branchA: StreamStateLattice_32<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_44<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_62<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_26<T, U> {
  readonly mask_26: 0xB2D737CFD731;
  readonly branchA: StreamStateLattice_33<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_45<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_63<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_27<T, U> {
  readonly mask_27: 0xFB795186D94A;
  readonly branchA: StreamStateLattice_34<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_46<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_00<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_28<T, U> {
  readonly mask_28: 0x176220807F84;
  readonly branchA: StreamStateLattice_35<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_47<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_01<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_29<T, U> {
  readonly mask_29: 0x398721879006;
  readonly branchA: StreamStateLattice_36<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_48<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_02<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_30<T, U> {
  readonly mask_30: 0x16F5A39FA446;
  readonly branchA: StreamStateLattice_37<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_49<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_03<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_31<T, U> {
  readonly mask_31: 0x450A0774BD8A;
  readonly branchA: StreamStateLattice_38<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_50<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_04<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_32<T, U> {
  readonly mask_32: 0x65CBEF1F4336;
  readonly branchA: StreamStateLattice_39<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_51<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_05<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_33<T, U> {
  readonly mask_33: 0xA1E513938E98;
  readonly branchA: StreamStateLattice_40<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_52<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_06<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_34<T, U> {
  readonly mask_34: 0xBA53CE21460F;
  readonly branchA: StreamStateLattice_41<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_53<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_07<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_35<T, U> {
  readonly mask_35: 0xAB5601113A0B;
  readonly branchA: StreamStateLattice_42<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_54<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_08<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_36<T, U> {
  readonly mask_36: 0xCA04953CF2E0;
  readonly branchA: StreamStateLattice_43<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_55<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_09<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_37<T, U> {
  readonly mask_37: 0xEC8FF87399C6;
  readonly branchA: StreamStateLattice_44<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_56<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_10<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_38<T, U> {
  readonly mask_38: 0xB021AEE7D2A5;
  readonly branchA: StreamStateLattice_45<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_57<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_11<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_39<T, U> {
  readonly mask_39: 0xF30F2ACC00D0;
  readonly branchA: StreamStateLattice_46<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_58<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_12<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_40<T, U> {
  readonly mask_40: 0xD531E79A457B;
  readonly branchA: StreamStateLattice_47<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_59<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_13<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_41<T, U> {
  readonly mask_41: 0xDAC61B425CF0;
  readonly branchA: StreamStateLattice_48<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_60<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_14<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_42<T, U> {
  readonly mask_42: 0xE7C4DEEB71AA;
  readonly branchA: StreamStateLattice_49<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_61<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_15<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_43<T, U> {
  readonly mask_43: 0xD3EA66C5EE92;
  readonly branchA: StreamStateLattice_50<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_62<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_16<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_44<T, U> {
  readonly mask_44: 0xAEA4D53A92F8;
  readonly branchA: StreamStateLattice_51<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_63<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_17<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_45<T, U> {
  readonly mask_45: 0xE50AC4555897;
  readonly branchA: StreamStateLattice_52<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_00<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_18<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_46<T, U> {
  readonly mask_46: 0x9AA87AA9DCCB;
  readonly branchA: StreamStateLattice_53<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_01<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_19<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_47<T, U> {
  readonly mask_47: 0x52B8EF2518F5;
  readonly branchA: StreamStateLattice_54<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_02<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_20<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_48<T, U> {
  readonly mask_48: 0x2B85EA551937;
  readonly branchA: StreamStateLattice_55<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_03<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_21<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_49<T, U> {
  readonly mask_49: 0xE8948C97D72A;
  readonly branchA: StreamStateLattice_56<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_04<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_22<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_50<T, U> {
  readonly mask_50: 0x9DFD36AC09B8;
  readonly branchA: StreamStateLattice_57<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_05<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_23<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_51<T, U> {
  readonly mask_51: 0x693AB3D16BEC;
  readonly branchA: StreamStateLattice_58<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_06<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_24<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_52<T, U> {
  readonly mask_52: 0x6FE5BA0A4A57;
  readonly branchA: StreamStateLattice_59<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_07<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_25<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_53<T, U> {
  readonly mask_53: 0xD703495499F2;
  readonly branchA: StreamStateLattice_60<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_08<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_26<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_54<T, U> {
  readonly mask_54: 0x7EF2917E2E49;
  readonly branchA: StreamStateLattice_61<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_09<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_27<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_55<T, U> {
  readonly mask_55: 0x962A4131F933;
  readonly branchA: StreamStateLattice_62<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_10<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_28<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_56<T, U> {
  readonly mask_56: 0xAFFC6E94DA16;
  readonly branchA: StreamStateLattice_63<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_11<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_29<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_57<T, U> {
  readonly mask_57: 0x97076E6C7657;
  readonly branchA: StreamStateLattice_00<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_12<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_30<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_58<T, U> {
  readonly mask_58: 0x17B3F8C34B54;
  readonly branchA: StreamStateLattice_01<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_13<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_31<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_59<T, U> {
  readonly mask_59: 0x9BE84F1A909B;
  readonly branchA: StreamStateLattice_02<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_14<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_32<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_60<T, U> {
  readonly mask_60: 0x4D19EB85427F;
  readonly branchA: StreamStateLattice_03<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_15<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_33<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_61<T, U> {
  readonly mask_61: 0x6ABC11B8ED61;
  readonly branchA: StreamStateLattice_04<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_16<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_34<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_62<T, U> {
  readonly mask_62: 0xD2C81C721855;
  readonly branchA: StreamStateLattice_05<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_17<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_35<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_63<T, U> {
  readonly mask_63: 0xECCAC6BC872A;
  readonly branchA: StreamStateLattice_06<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_18<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_36<EpochParity<T, U>, EpochParity<U, T>>;
}
