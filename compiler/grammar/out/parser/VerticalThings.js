// Generated from VerticalThings.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var VerticalThingsListener = require('./VerticalThingsListener').VerticalThingsListener;
var VerticalThingsVisitor = require('./VerticalThingsVisitor').VerticalThingsVisitor;

var grammarFileName = "VerticalThings.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003F\u023e\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0004",
    "3\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u00048\t8\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0007\u0002u\n\u0002\f\u0002\u000e\u0002",
    "x\u000b\u0002\u0003\u0002\u0007\u0002{\n\u0002\f\u0002\u000e\u0002~",
    "\u000b\u0002\u0003\u0002\u0007\u0002\u0081\n\u0002\f\u0002\u000e\u0002",
    "\u0084\u000b\u0002\u0003\u0002\u0003\u0002\u0005\u0002\u0088\n\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003",
    "\u008f\n\u0003\f\u0003\u000e\u0003\u0092\u000b\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004\u0099\n\u0004",
    "\f\u0004\u000e\u0004\u009c\u000b\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0007\u0004\u00a2\n\u0004\f\u0004\u000e\u0004\u00a5",
    "\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0007\u0005\u00ac\n\u0005\f\u0005\u000e\u0005\u00af\u000b\u0005\u0005",
    "\u0005\u00b1\n\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0005\u0006",
    "\u00b6\n\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0005\t\u00c5\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007\n",
    "\u00cc\n\n\f\n\u000e\n\u00cf\u000b\n\u0005\n\u00d1\n\n\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00d9",
    "\n\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0005",
    "\r\u00e2\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u00e7\n",
    "\u000e\f\u000e\u000e\u000e\u00ea\u000b\u000e\u0003\u000e\u0005\u000e",
    "\u00ed\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0007",
    "\u0011\u00f9\n\u0011\f\u0011\u000e\u0011\u00fc\u000b\u0011\u0005\u0011",
    "\u00fe\n\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0005\u0012\u0105\n\u0012\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0005\u0013\u010a\n\u0013\u0003\u0014\u0005\u0014\u010d\n\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0007\u0014\u0113\n\u0014",
    "\f\u0014\u000e\u0014\u0116\u000b\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0005\u0016\u0121\n\u0016\u0003\u0017\u0005\u0017\u0124\n\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0006\u0017\u012a\n",
    "\u0017\r\u0017\u000e\u0017\u012b\u0003\u0018\u0003\u0018\u0003\u0019",
    "\u0003\u0019\u0005\u0019\u0132\n\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003",
    "\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0005",
    "\u001d\u0142\n\u001d\u0003\u001d\u0005\u001d\u0145\n\u001d\u0003\u001e",
    "\u0005\u001e\u0148\n\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0005",
    "\u001f\u014d\n\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003 \u0003",
    " \u0003 \u0007 \u0155\n \f \u000e \u0158\u000b \u0003!\u0003!\u0007",
    "!\u015c\n!\f!\u000e!\u015f\u000b!\u0003!\u0003!\u0003\"\u0003\"\u0003",
    "\"\u0005\"\u0166\n\"\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0005",
    "#\u016e\n#\u0003$\u0003$\u0003$\u0007$\u0173\n$\f$\u000e$\u0176\u000b",
    "$\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003&\u0003&\u0003&\u0003",
    "&\u0003&\u0003&\u0003\'\u0003\'\u0005\'\u0186\n\'\u0003\'\u0003\'\u0003",
    "\'\u0003(\u0003(\u0003(\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003",
    ")\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0005)\u019b\n)\u0003*\u0003",
    "*\u0005*\u019f\n*\u0003*\u0003*\u0003*\u0005*\u01a4\n*\u0003*\u0003",
    "*\u0003*\u0007*\u01a9\n*\f*\u000e*\u01ac\u000b*\u0003*\u0007*\u01af",
    "\n*\f*\u000e*\u01b2\u000b*\u0003*\u0003*\u0003+\u0003+\u0003+\u0007",
    "+\u01b9\n+\f+\u000e+\u01bc\u000b+\u0003,\u0003,\u0003,\u0006,\u01c1",
    "\n,\r,\u000e,\u01c2\u0003-\u0003-\u0005-\u01c7\n-\u0003-\u0003-\u0005",
    "-\u01cb\n-\u0003-\u0003-\u0003.\u0003.\u0005.\u01d1\n.\u0003.\u0003",
    ".\u0005.\u01d5\n.\u0003/\u0003/\u0003/\u0007/\u01da\n/\f/\u000e/\u01dd",
    "\u000b/\u0003/\u0005/\u01e0\n/\u00030\u00030\u00030\u00031\u00031\u0003",
    "1\u00051\u01e8\n1\u00032\u00032\u00032\u00032\u00032\u00033\u00033\u0003",
    "3\u00033\u00033\u00033\u00033\u00033\u00033\u00033\u00033\u00033\u0003",
    "3\u00053\u01fc\n3\u00033\u00033\u00033\u00033\u00033\u00033\u00033\u0003",
    "3\u00033\u00033\u00033\u00033\u00033\u00033\u00033\u00033\u00033\u0003",
    "3\u00073\u0210\n3\f3\u000e3\u0213\u000b3\u00034\u00034\u00034\u0003",
    "4\u00034\u00034\u00034\u00034\u00054\u021d\n4\u00035\u00035\u00035\u0003",
    "5\u00035\u00035\u00035\u00035\u00035\u00055\u0228\n5\u00035\u00035\u0003",
    "5\u00075\u022d\n5\f5\u000e5\u0230\u000b5\u00036\u00036\u00037\u0003",
    "7\u00037\u00057\u0237\n7\u00038\u00038\u00038\u00058\u023c\n8\u0003",
    "8\u0002\u0004dh9\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjln\u0002",
    "\u0010\u0003\u0002\u0010\u0011\u0004\u0002\u001e\u001e  \u0003\u0002",
    "=>\u0004\u0002\u001a\u001a\u001c\u001c\u0003\u00029;\u0004\u0002\u000e",
    "\u000e9;\u0004\u0002\u001f\u001f44\u0004\u00022355\u0003\u000201\u0004",
    "\u0002 \"$$\u0003\u0002\u001e\u001f\u0003\u0002&+\u0003\u0002-.\u0003",
    "\u0002>?\u025d\u0002p\u0003\u0002\u0002\u0002\u0004\u0089\u0003\u0002",
    "\u0002\u0002\u0006\u0095\u0003\u0002\u0002\u0002\b\u00a6\u0003\u0002",
    "\u0002\u0002\n\u00b5\u0003\u0002\u0002\u0002\f\u00b9\u0003\u0002\u0002",
    "\u0002\u000e\u00bd\u0003\u0002\u0002\u0002\u0010\u00c4\u0003\u0002\u0002",
    "\u0002\u0012\u00c6\u0003\u0002\u0002\u0002\u0014\u00d4\u0003\u0002\u0002",
    "\u0002\u0016\u00da\u0003\u0002\u0002\u0002\u0018\u00e1\u0003\u0002\u0002",
    "\u0002\u001a\u00e3\u0003\u0002\u0002\u0002\u001c\u00ee\u0003\u0002\u0002",
    "\u0002\u001e\u00f2\u0003\u0002\u0002\u0002 \u00f4\u0003\u0002\u0002",
    "\u0002\"\u0104\u0003\u0002\u0002\u0002$\u0106\u0003\u0002\u0002\u0002",
    "&\u010c\u0003\u0002\u0002\u0002(\u0119\u0003\u0002\u0002\u0002*\u0120",
    "\u0003\u0002\u0002\u0002,\u0123\u0003\u0002\u0002\u0002.\u012d\u0003",
    "\u0002\u0002\u00020\u0131\u0003\u0002\u0002\u00022\u0133\u0003\u0002",
    "\u0002\u00024\u0139\u0003\u0002\u0002\u00026\u013b\u0003\u0002\u0002",
    "\u00028\u0141\u0003\u0002\u0002\u0002:\u0147\u0003\u0002\u0002\u0002",
    "<\u014c\u0003\u0002\u0002\u0002>\u0151\u0003\u0002\u0002\u0002@\u0159",
    "\u0003\u0002\u0002\u0002B\u0162\u0003\u0002\u0002\u0002D\u0167\u0003",
    "\u0002\u0002\u0002F\u016f\u0003\u0002\u0002\u0002H\u0177\u0003\u0002",
    "\u0002\u0002J\u017d\u0003\u0002\u0002\u0002L\u0183\u0003\u0002\u0002",
    "\u0002N\u018a\u0003\u0002\u0002\u0002P\u019a\u0003\u0002\u0002\u0002",
    "R\u019e\u0003\u0002\u0002\u0002T\u01b5\u0003\u0002\u0002\u0002V\u01bd",
    "\u0003\u0002\u0002\u0002X\u01c6\u0003\u0002\u0002\u0002Z\u01d0\u0003",
    "\u0002\u0002\u0002\\\u01d6\u0003\u0002\u0002\u0002^\u01e1\u0003\u0002",
    "\u0002\u0002`\u01e4\u0003\u0002\u0002\u0002b\u01e9\u0003\u0002\u0002",
    "\u0002d\u01fb\u0003\u0002\u0002\u0002f\u021c\u0003\u0002\u0002\u0002",
    "h\u0227\u0003\u0002\u0002\u0002j\u0231\u0003\u0002\u0002\u0002l\u0236",
    "\u0003\u0002\u0002\u0002n\u023b\u0003\u0002\u0002\u0002pq\u0007\u0003",
    "\u0002\u0002qr\u0007=\u0002\u0002rv\u0007\u0013\u0002\u0002su\u0005",
    "\u001c\u000f\u0002ts\u0003\u0002\u0002\u0002ux\u0003\u0002\u0002\u0002",
    "vt\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002w|\u0003\u0002\u0002",
    "\u0002xv\u0003\u0002\u0002\u0002y{\u0005&\u0014\u0002zy\u0003\u0002",
    "\u0002\u0002{~\u0003\u0002\u0002\u0002|z\u0003\u0002\u0002\u0002|}\u0003",
    "\u0002\u0002\u0002}\u0087\u0003\u0002\u0002\u0002~|\u0003\u0002\u0002",
    "\u0002\u007f\u0081\u0005R*\u0002\u0080\u007f\u0003\u0002\u0002\u0002",
    "\u0081\u0084\u0003\u0002\u0002\u0002\u0082\u0080\u0003\u0002\u0002\u0002",
    "\u0082\u0083\u0003\u0002\u0002\u0002\u0083\u0088\u0003\u0002\u0002\u0002",
    "\u0084\u0082\u0003\u0002\u0002\u0002\u0085\u0088\u0005\u0014\u000b\u0002",
    "\u0086\u0088\u0005\u0004\u0003\u0002\u0087\u0082\u0003\u0002\u0002\u0002",
    "\u0087\u0085\u0003\u0002\u0002\u0002\u0087\u0086\u0003\u0002\u0002\u0002",
    "\u0088\u0003\u0003\u0002\u0002\u0002\u0089\u008a\u00077\u0002\u0002",
    "\u008a\u0090\u0007\u0016\u0002\u0002\u008b\u008c\u0005\u0006\u0004\u0002",
    "\u008c\u008d\u0007\u0013\u0002\u0002\u008d\u008f\u0003\u0002\u0002\u0002",
    "\u008e\u008b\u0003\u0002\u0002\u0002\u008f\u0092\u0003\u0002\u0002\u0002",
    "\u0090\u008e\u0003\u0002\u0002\u0002\u0090\u0091\u0003\u0002\u0002\u0002",
    "\u0091\u0093\u0003\u0002\u0002\u0002\u0092\u0090\u0003\u0002\u0002\u0002",
    "\u0093\u0094\u0007\u0017\u0002\u0002\u0094\u0005\u0003\u0002\u0002\u0002",
    "\u0095\u009a\u0005\b\u0005\u0002\u0096\u0097\u0007\u001a\u0002\u0002",
    "\u0097\u0099\u0005\f\u0007\u0002\u0098\u0096\u0003\u0002\u0002\u0002",
    "\u0099\u009c\u0003\u0002\u0002\u0002\u009a\u0098\u0003\u0002\u0002\u0002",
    "\u009a\u009b\u0003\u0002\u0002\u0002\u009b\u009d\u0003\u0002\u0002\u0002",
    "\u009c\u009a\u0003\u0002\u0002\u0002\u009d\u009e\u00078\u0002\u0002",
    "\u009e\u00a3\u0005\u000e\b\u0002\u009f\u00a0\u0007\u001a\u0002\u0002",
    "\u00a0\u00a2\u0005\u000e\b\u0002\u00a1\u009f\u0003\u0002\u0002\u0002",
    "\u00a2\u00a5\u0003\u0002\u0002\u0002\u00a3\u00a1\u0003\u0002\u0002\u0002",
    "\u00a3\u00a4\u0003\u0002\u0002\u0002\u00a4\u0007\u0003\u0002\u0002\u0002",
    "\u00a5\u00a3\u0003\u0002\u0002\u0002\u00a6\u00a7\u0005T+\u0002\u00a7",
    "\u00b0\u0007\u0014\u0002\u0002\u00a8\u00ad\u0005\n\u0006\u0002\u00a9",
    "\u00aa\u0007\u001a\u0002\u0002\u00aa\u00ac\u0005\n\u0006\u0002\u00ab",
    "\u00a9\u0003\u0002\u0002\u0002\u00ac\u00af\u0003\u0002\u0002\u0002\u00ad",
    "\u00ab\u0003\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae",
    "\u00b1\u0003\u0002\u0002\u0002\u00af\u00ad\u0003\u0002\u0002\u0002\u00b0",
    "\u00a8\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b1",
    "\u00b2\u0003\u0002\u0002\u0002\u00b2\u00b3\u0007\u0015\u0002\u0002\u00b3",
    "\t\u0003\u0002\u0002\u0002\u00b4\u00b6\u00076\u0002\u0002\u00b5\u00b4",
    "\u0003\u0002\u0002\u0002\u00b5\u00b6\u0003\u0002\u0002\u0002\u00b6\u00b7",
    "\u0003\u0002\u0002\u0002\u00b7\u00b8\u0007=\u0002\u0002\u00b8\u000b",
    "\u0003\u0002\u0002\u0002\u00b9\u00ba\u0007=\u0002\u0002\u00ba\u00bb",
    "\u0007\u001c\u0002\u0002\u00bb\u00bc\u0007=\u0002\u0002\u00bc\r\u0003",
    "\u0002\u0002\u0002\u00bd\u00be\u0007=\u0002\u0002\u00be\u00bf\u0005",
    "\u0010\t\u0002\u00bf\u000f\u0003\u0002\u0002\u0002\u00c0\u00c5\u0007",
    "=\u0002\u0002\u00c1\u00c5\u0005l7\u0002\u00c2\u00c5\u0007B\u0002\u0002",
    "\u00c3\u00c5\u0005\u0012\n\u0002\u00c4\u00c0\u0003\u0002\u0002\u0002",
    "\u00c4\u00c1\u0003\u0002\u0002\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002",
    "\u00c4\u00c3\u0003\u0002\u0002\u0002\u00c5\u0011\u0003\u0002\u0002\u0002",
    "\u00c6\u00c7\u0007=\u0002\u0002\u00c7\u00d0\u0007\u0014\u0002\u0002",
    "\u00c8\u00cd\u0005\u0010\t\u0002\u00c9\u00ca\u0007\u001a\u0002\u0002",
    "\u00ca\u00cc\u0005\u0010\t\u0002\u00cb\u00c9\u0003\u0002\u0002\u0002",
    "\u00cc\u00cf\u0003\u0002\u0002\u0002\u00cd\u00cb\u0003\u0002\u0002\u0002",
    "\u00cd\u00ce\u0003\u0002\u0002\u0002\u00ce\u00d1\u0003\u0002\u0002\u0002",
    "\u00cf\u00cd\u0003\u0002\u0002\u0002\u00d0\u00c8\u0003\u0002\u0002\u0002",
    "\u00d0\u00d1\u0003\u0002\u0002\u0002\u00d1\u00d2\u0003\u0002\u0002\u0002",
    "\u00d2\u00d3\u0007\u0015\u0002\u0002\u00d3\u0013\u0003\u0002\u0002\u0002",
    "\u00d4\u00d5\u0007\u0004\u0002\u0002\u00d5\u00d6\u0007=\u0002\u0002",
    "\u00d6\u00d8\u0005\u0016\f\u0002\u00d7\u00d9\u0007\u0013\u0002\u0002",
    "\u00d8\u00d7\u0003\u0002\u0002\u0002\u00d8\u00d9\u0003\u0002\u0002\u0002",
    "\u00d9\u0015\u0003\u0002\u0002\u0002\u00da\u00db\u0007\u0016\u0002\u0002",
    "\u00db\u00dc\u0005\u001a\u000e\u0002\u00dc\u00dd\u0007\u0017\u0002\u0002",
    "\u00dd\u0017\u0003\u0002\u0002\u0002\u00de\u00e2\u0005T+\u0002\u00df",
    "\u00e2\u0005X-\u0002\u00e0\u00e2\u0005\u0016\f\u0002\u00e1\u00de\u0003",
    "\u0002\u0002\u0002\u00e1\u00df\u0003\u0002\u0002\u0002\u00e1\u00e0\u0003",
    "\u0002\u0002\u0002\u00e2\u0019\u0003\u0002\u0002\u0002\u00e3\u00e8\u0005",
    "\u0018\r\u0002\u00e4\u00e5\u0007\u001a\u0002\u0002\u00e5\u00e7\u0005",
    "\u0018\r\u0002\u00e6\u00e4\u0003\u0002\u0002\u0002\u00e7\u00ea\u0003",
    "\u0002\u0002\u0002\u00e8\u00e6\u0003\u0002\u0002\u0002\u00e8\u00e9\u0003",
    "\u0002\u0002\u0002\u00e9\u00ec\u0003\u0002\u0002\u0002\u00ea\u00e8\u0003",
    "\u0002\u0002\u0002\u00eb\u00ed\u0007\u001a\u0002\u0002\u00ec\u00eb\u0003",
    "\u0002\u0002\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ed\u001b\u0003",
    "\u0002\u0002\u0002\u00ee\u00ef\u0007\u0006\u0002\u0002\u00ef\u00f0\u0007",
    "=\u0002\u0002\u00f0\u00f1\u0007\u0013\u0002\u0002\u00f1\u001d\u0003",
    "\u0002\u0002\u0002\u00f2\u00f3\t\u0002\u0002\u0002\u00f3\u001f\u0003",
    "\u0002\u0002\u0002\u00f4\u00fd\u0007\u0016\u0002\u0002\u00f5\u00fa\u0005",
    "n8\u0002\u00f6\u00f7\u0007\u001a\u0002\u0002\u00f7\u00f9\u0005n8\u0002",
    "\u00f8\u00f6\u0003\u0002\u0002\u0002\u00f9\u00fc\u0003\u0002\u0002\u0002",
    "\u00fa\u00f8\u0003\u0002\u0002\u0002\u00fa\u00fb\u0003\u0002\u0002\u0002",
    "\u00fb\u00fe\u0003\u0002\u0002\u0002\u00fc\u00fa\u0003\u0002\u0002\u0002",
    "\u00fd\u00f5\u0003\u0002\u0002\u0002\u00fd\u00fe\u0003\u0002\u0002\u0002",
    "\u00fe\u00ff\u0003\u0002\u0002\u0002\u00ff\u0100\u0007\u0017\u0002\u0002",
    "\u0100!\u0003\u0002\u0002\u0002\u0101\u0105\u0005h5\u0002\u0102\u0105",
    "\u0007B\u0002\u0002\u0103\u0105\u0005 \u0011\u0002\u0104\u0101\u0003",
    "\u0002\u0002\u0002\u0104\u0102\u0003\u0002\u0002\u0002\u0104\u0103\u0003",
    "\u0002\u0002\u0002\u0105#\u0003\u0002\u0002\u0002\u0106\u0109\u0007",
    "=\u0002\u0002\u0107\u0108\u0007,\u0002\u0002\u0108\u010a\u0005\"\u0012",
    "\u0002\u0109\u0107\u0003\u0002\u0002\u0002\u0109\u010a\u0003\u0002\u0002",
    "\u0002\u010a%\u0003\u0002\u0002\u0002\u010b\u010d\u0007\t\u0002\u0002",
    "\u010c\u010b\u0003\u0002\u0002\u0002\u010c\u010d\u0003\u0002\u0002\u0002",
    "\u010d\u010e\u0003\u0002\u0002\u0002\u010e\u010f\u00058\u001d\u0002",
    "\u010f\u0114\u0005$\u0013\u0002\u0110\u0111\u0007\u001a\u0002\u0002",
    "\u0111\u0113\u0005$\u0013\u0002\u0112\u0110\u0003\u0002\u0002\u0002",
    "\u0113\u0116\u0003\u0002\u0002\u0002\u0114\u0112\u0003\u0002\u0002\u0002",
    "\u0114\u0115\u0003\u0002\u0002\u0002\u0115\u0117\u0003\u0002\u0002\u0002",
    "\u0116\u0114\u0003\u0002\u0002\u0002\u0117\u0118\u0007\u0013\u0002\u0002",
    "\u0118\'\u0003\u0002\u0002\u0002\u0119\u011a\u0005.\u0018\u0002\u011a",
    "\u011b\t\u0003\u0002\u0002\u011b\u011c\u0005.\u0018\u0002\u011c)\u0003",
    "\u0002\u0002\u0002\u011d\u0121\u0007>\u0002\u0002\u011e\u0121\u0007",
    "=\u0002\u0002\u011f\u0121\u0005(\u0015\u0002\u0120\u011d\u0003\u0002",
    "\u0002\u0002\u0120\u011e\u0003\u0002\u0002\u0002\u0120\u011f\u0003\u0002",
    "\u0002\u0002\u0121+\u0003\u0002\u0002\u0002\u0122\u0124\u0007\u0012",
    "\u0002\u0002\u0123\u0122\u0003\u0002\u0002\u0002\u0123\u0124\u0003\u0002",
    "\u0002\u0002\u0124\u0129\u0003\u0002\u0002\u0002\u0125\u0126\u0007\u0018",
    "\u0002\u0002\u0126\u0127\u0005*\u0016\u0002\u0127\u0128\u0007\u0019",
    "\u0002\u0002\u0128\u012a\u0003\u0002\u0002\u0002\u0129\u0125\u0003\u0002",
    "\u0002\u0002\u012a\u012b\u0003\u0002\u0002\u0002\u012b\u0129\u0003\u0002",
    "\u0002\u0002\u012b\u012c\u0003\u0002\u0002\u0002\u012c-\u0003\u0002",
    "\u0002\u0002\u012d\u012e\t\u0004\u0002\u0002\u012e/\u0003\u0002\u0002",
    "\u0002\u012f\u0132\u0007=\u0002\u0002\u0130\u0132\u0005j6\u0002\u0131",
    "\u012f\u0003\u0002\u0002\u0002\u0131\u0130\u0003\u0002\u0002\u0002\u0132",
    "1\u0003\u0002\u0002\u0002\u0133\u0134\u0007\u0018\u0002\u0002\u0134",
    "\u0135\u00050\u0019\u0002\u0135\u0136\t\u0005\u0002\u0002\u0136\u0137",
    "\u00050\u0019\u0002\u0137\u0138\u0007\u0019\u0002\u0002\u01383\u0003",
    "\u0002\u0002\u0002\u0139\u013a\t\u0006\u0002\u0002\u013a5\u0003\u0002",
    "\u0002\u0002\u013b\u013c\t\u0007\u0002\u0002\u013c7\u0003\u0002\u0002",
    "\u0002\u013d\u0142\u0005T+\u0002\u013e\u0142\u0005V,\u0002\u013f\u0142",
    "\u00052\u001a\u0002\u0140\u0142\u00056\u001c\u0002\u0141\u013d\u0003",
    "\u0002\u0002\u0002\u0141\u013e\u0003\u0002\u0002\u0002\u0141\u013f\u0003",
    "\u0002\u0002\u0002\u0141\u0140\u0003\u0002\u0002\u0002\u0142\u0144\u0003",
    "\u0002\u0002\u0002\u0143\u0145\u0005,\u0017\u0002\u0144\u0143\u0003",
    "\u0002\u0002\u0002\u0144\u0145\u0003\u0002\u0002\u0002\u01459\u0003",
    "\u0002\u0002\u0002\u0146\u0148\u0007\b\u0002\u0002\u0147\u0146\u0003",
    "\u0002\u0002\u0002\u0147\u0148\u0003\u0002\u0002\u0002\u0148\u0149\u0003",
    "\u0002\u0002\u0002\u0149\u014a\u0007\u0005\u0002\u0002\u014a;\u0003",
    "\u0002\u0002\u0002\u014b\u014d\u0007\t\u0002\u0002\u014c\u014b\u0003",
    "\u0002\u0002\u0002\u014c\u014d\u0003\u0002\u0002\u0002\u014d\u014e\u0003",
    "\u0002\u0002\u0002\u014e\u014f\u00058\u001d\u0002\u014f\u0150\u0007",
    "=\u0002\u0002\u0150=\u0003\u0002\u0002\u0002\u0151\u0156\u0005<\u001f",
    "\u0002\u0152\u0153\u0007\u001a\u0002\u0002\u0153\u0155\u0005<\u001f",
    "\u0002\u0154\u0152\u0003\u0002\u0002\u0002\u0155\u0158\u0003\u0002\u0002",
    "\u0002\u0156\u0154\u0003\u0002\u0002\u0002\u0156\u0157\u0003\u0002\u0002",
    "\u0002\u0157?\u0003\u0002\u0002\u0002\u0158\u0156\u0003\u0002\u0002",
    "\u0002\u0159\u015d\u0007\u0016\u0002\u0002\u015a\u015c\u0005P)\u0002",
    "\u015b\u015a\u0003\u0002\u0002\u0002\u015c\u015f\u0003\u0002\u0002\u0002",
    "\u015d\u015b\u0003\u0002\u0002\u0002\u015d\u015e\u0003\u0002\u0002\u0002",
    "\u015e\u0160\u0003\u0002\u0002\u0002\u015f\u015d\u0003\u0002\u0002\u0002",
    "\u0160\u0161\u0007\u0017\u0002\u0002\u0161A\u0003\u0002\u0002\u0002",
    "\u0162\u0165\u0007\u000b\u0002\u0002\u0163\u0166\u0005@!\u0002\u0164",
    "\u0166\u0005D#\u0002\u0165\u0163\u0003\u0002\u0002\u0002\u0165\u0164",
    "\u0003\u0002\u0002\u0002\u0166C\u0003\u0002\u0002\u0002\u0167\u0168",
    "\u0007\n\u0002\u0002\u0168\u0169\u0007\u0014\u0002\u0002\u0169\u016a",
    "\u0005h5\u0002\u016a\u016b\u0007\u0015\u0002\u0002\u016b\u016d\u0005",
    "@!\u0002\u016c\u016e\u0005B\"\u0002\u016d\u016c\u0003\u0002\u0002\u0002",
    "\u016d\u016e\u0003\u0002\u0002\u0002\u016eE\u0003\u0002\u0002\u0002",
    "\u016f\u0174\u0007=\u0002\u0002\u0170\u0171\u0007\u001a\u0002\u0002",
    "\u0171\u0173\u0007=\u0002\u0002\u0172\u0170\u0003\u0002\u0002\u0002",
    "\u0173\u0176\u0003\u0002\u0002\u0002\u0174\u0172\u0003\u0002\u0002\u0002",
    "\u0174\u0175\u0003\u0002\u0002\u0002\u0175G\u0003\u0002\u0002\u0002",
    "\u0176\u0174\u0003\u0002\u0002\u0002\u0177\u0178\u0007\f\u0002\u0002",
    "\u0178\u0179\u0005F$\u0002\u0179\u017a\u0007\r\u0002\u0002\u017a\u017b",
    "\u00052\u001a\u0002\u017b\u017c\u0005@!\u0002\u017cI\u0003\u0002\u0002",
    "\u0002\u017d\u017e\u0007\u000f\u0002\u0002\u017e\u017f\u0007\u0014\u0002",
    "\u0002\u017f\u0180\u0005h5\u0002\u0180\u0181\u0007\u0015\u0002\u0002",
    "\u0181\u0182\u0005@!\u0002\u0182K\u0003\u0002\u0002\u0002\u0183\u0185",
    "\u0005T+\u0002\u0184\u0186\u0005,\u0017\u0002\u0185\u0184\u0003\u0002",
    "\u0002\u0002\u0185\u0186\u0003\u0002\u0002\u0002\u0186\u0187\u0003\u0002",
    "\u0002\u0002\u0187\u0188\u0007,\u0002\u0002\u0188\u0189\u0005h5\u0002",
    "\u0189M\u0003\u0002\u0002\u0002\u018a\u018b\u0007<\u0002\u0002\u018b",
    "\u018c\u0005h5\u0002\u018cO\u0003\u0002\u0002\u0002\u018d\u019b\u0005",
    "@!\u0002\u018e\u019b\u0005D#\u0002\u018f\u019b\u0005H%\u0002\u0190\u019b",
    "\u0005J&\u0002\u0191\u0192\u0005L\'\u0002\u0192\u0193\u0007\u0013\u0002",
    "\u0002\u0193\u019b\u0003\u0002\u0002\u0002\u0194\u0195\u0005X-\u0002",
    "\u0195\u0196\u0007\u0013\u0002\u0002\u0196\u019b\u0003\u0002\u0002\u0002",
    "\u0197\u0198\u0005N(\u0002\u0198\u0199\u0007\u0013\u0002\u0002\u0199",
    "\u019b\u0003\u0002\u0002\u0002\u019a\u018d\u0003\u0002\u0002\u0002\u019a",
    "\u018e\u0003\u0002\u0002\u0002\u019a\u018f\u0003\u0002\u0002\u0002\u019a",
    "\u0190\u0003\u0002\u0002\u0002\u019a\u0191\u0003\u0002\u0002\u0002\u019a",
    "\u0194\u0003\u0002\u0002\u0002\u019a\u0197\u0003\u0002\u0002\u0002\u019b",
    "Q\u0003\u0002\u0002\u0002\u019c\u019f\u00058\u001d\u0002\u019d\u019f",
    "\u0005:\u001e\u0002\u019e\u019c\u0003\u0002\u0002\u0002\u019e\u019d",
    "\u0003\u0002\u0002\u0002\u019e\u019f\u0003\u0002\u0002\u0002\u019f\u01a0",
    "\u0003\u0002\u0002\u0002\u01a0\u01a1\u0007=\u0002\u0002\u01a1\u01a3",
    "\u0007\u0014\u0002\u0002\u01a2\u01a4\u0005> \u0002\u01a3\u01a2\u0003",
    "\u0002\u0002\u0002\u01a3\u01a4\u0003\u0002\u0002\u0002\u01a4\u01a5\u0003",
    "\u0002\u0002\u0002\u01a5\u01a6\u0007\u0015\u0002\u0002\u01a6\u01aa\u0007",
    "\u0016\u0002\u0002\u01a7\u01a9\u0005&\u0014\u0002\u01a8\u01a7\u0003",
    "\u0002\u0002\u0002\u01a9\u01ac\u0003\u0002\u0002\u0002\u01aa\u01a8\u0003",
    "\u0002\u0002\u0002\u01aa\u01ab\u0003\u0002\u0002\u0002\u01ab\u01b0\u0003",
    "\u0002\u0002\u0002\u01ac\u01aa\u0003\u0002\u0002\u0002\u01ad\u01af\u0005",
    "P)\u0002\u01ae\u01ad\u0003\u0002\u0002\u0002\u01af\u01b2\u0003\u0002",
    "\u0002\u0002\u01b0\u01ae\u0003\u0002\u0002\u0002\u01b0\u01b1\u0003\u0002",
    "\u0002\u0002\u01b1\u01b3\u0003\u0002\u0002\u0002\u01b2\u01b0\u0003\u0002",
    "\u0002\u0002\u01b3\u01b4\u0007\u0017\u0002\u0002\u01b4S\u0003\u0002",
    "\u0002\u0002\u01b5\u01ba\u0007=\u0002\u0002\u01b6\u01b7\u0007\u001d",
    "\u0002\u0002\u01b7\u01b9\u0007=\u0002\u0002\u01b8\u01b6\u0003\u0002",
    "\u0002\u0002\u01b9\u01bc\u0003\u0002\u0002\u0002\u01ba\u01b8\u0003\u0002",
    "\u0002\u0002\u01ba\u01bb\u0003\u0002\u0002\u0002\u01bbU\u0003\u0002",
    "\u0002\u0002\u01bc\u01ba\u0003\u0002\u0002\u0002\u01bd\u01c0\u0007=",
    "\u0002\u0002\u01be\u01bf\u0007\u001b\u0002\u0002\u01bf\u01c1\u0007=",
    "\u0002\u0002\u01c0\u01be\u0003\u0002\u0002\u0002\u01c1\u01c2\u0003\u0002",
    "\u0002\u0002\u01c2\u01c0\u0003\u0002\u0002\u0002\u01c2\u01c3\u0003\u0002",
    "\u0002\u0002\u01c3W\u0003\u0002\u0002\u0002\u01c4\u01c7\u0005T+\u0002",
    "\u01c5\u01c7\u0005V,\u0002\u01c6\u01c4\u0003\u0002\u0002\u0002\u01c6",
    "\u01c5\u0003\u0002\u0002\u0002\u01c7\u01c8\u0003\u0002\u0002\u0002\u01c8",
    "\u01ca\u0007\u0014\u0002\u0002\u01c9\u01cb\u0005\\/\u0002\u01ca\u01c9",
    "\u0003\u0002\u0002\u0002\u01ca\u01cb\u0003\u0002\u0002\u0002\u01cb\u01cc",
    "\u0003\u0002\u0002\u0002\u01cc\u01cd\u0007\u0015\u0002\u0002\u01cdY",
    "\u0003\u0002\u0002\u0002\u01ce\u01cf\u0007=\u0002\u0002\u01cf\u01d1",
    "\u0007,\u0002\u0002\u01d0\u01ce\u0003\u0002\u0002\u0002\u01d0\u01d1",
    "\u0003\u0002\u0002\u0002\u01d1\u01d4\u0003\u0002\u0002\u0002\u01d2\u01d5",
    "\u0005h5\u0002\u01d3\u01d5\u0007B\u0002\u0002\u01d4\u01d2\u0003\u0002",
    "\u0002\u0002\u01d4\u01d3\u0003\u0002\u0002\u0002\u01d5[\u0003\u0002",
    "\u0002\u0002\u01d6\u01db\u0005Z.\u0002\u01d7\u01d8\u0007\u001a\u0002",
    "\u0002\u01d8\u01da\u0005Z.\u0002\u01d9\u01d7\u0003\u0002\u0002\u0002",
    "\u01da\u01dd\u0003\u0002\u0002\u0002\u01db\u01d9\u0003\u0002\u0002\u0002",
    "\u01db\u01dc\u0003\u0002\u0002\u0002\u01dc\u01df\u0003\u0002\u0002\u0002",
    "\u01dd\u01db\u0003\u0002\u0002\u0002\u01de\u01e0\u0007\u001a\u0002\u0002",
    "\u01df\u01de\u0003\u0002\u0002\u0002\u01df\u01e0\u0003\u0002\u0002\u0002",
    "\u01e0]\u0003\u0002\u0002\u0002\u01e1\u01e2\u0007=\u0002\u0002\u01e2",
    "\u01e3\u0005,\u0017\u0002\u01e3_\u0003\u0002\u0002\u0002\u01e4\u01e7",
    "\u00076\u0002\u0002\u01e5\u01e8\u0005^0\u0002\u01e6\u01e8\u0005T+\u0002",
    "\u01e7\u01e5\u0003\u0002\u0002\u0002\u01e7\u01e6\u0003\u0002\u0002\u0002",
    "\u01e8a\u0003\u0002\u0002\u0002\u01e9\u01ea\u00054\u001b\u0002\u01ea",
    "\u01eb\u0007\u0014\u0002\u0002\u01eb\u01ec\u0005d3\u0002\u01ec\u01ed",
    "\u0007\u0015\u0002\u0002\u01edc\u0003\u0002\u0002\u0002\u01ee\u01ef",
    "\b3\u0001\u0002\u01ef\u01f0\t\b\u0002\u0002\u01f0\u01fc\u0005d3\t\u01f1",
    "\u01fc\u0005b2\u0002\u01f2\u01fc\u0005T+\u0002\u01f3\u01fc\u0005^0\u0002",
    "\u01f4\u01fc\u0005`1\u0002\u01f5\u01fc\u0005X-\u0002\u01f6\u01fc\u0005",
    "l7\u0002\u01f7\u01f8\u0007\u0014\u0002\u0002\u01f8\u01f9\u0005d3\u0002",
    "\u01f9\u01fa\u0007\u0015\u0002\u0002\u01fa\u01fc\u0003\u0002\u0002\u0002",
    "\u01fb\u01ee\u0003\u0002\u0002\u0002\u01fb\u01f1\u0003\u0002\u0002\u0002",
    "\u01fb\u01f2\u0003\u0002\u0002\u0002\u01fb\u01f3\u0003\u0002\u0002\u0002",
    "\u01fb\u01f4\u0003\u0002\u0002\u0002\u01fb\u01f5\u0003\u0002\u0002\u0002",
    "\u01fb\u01f6\u0003\u0002\u0002\u0002\u01fb\u01f7\u0003\u0002\u0002\u0002",
    "\u01fc\u0211\u0003\u0002\u0002\u0002\u01fd\u01fe\f\u0010\u0002\u0002",
    "\u01fe\u01ff\u0007#\u0002\u0002\u01ff\u0210\u0005d3\u0011\u0200\u0201",
    "\f\b\u0002\u0002\u0201\u0202\t\t\u0002\u0002\u0202\u0210\u0005d3\t\u0203",
    "\u0204\f\u0007\u0002\u0002\u0204\u0205\t\n\u0002\u0002\u0205\u0210\u0005",
    "d3\b\u0206\u0207\f\u0006\u0002\u0002\u0207\u0208\u0007%\u0002\u0002",
    "\u0208\u0210\u0005d3\u0007\u0209\u020a\f\u0005\u0002\u0002\u020a\u020b",
    "\t\u000b\u0002\u0002\u020b\u0210\u0005d3\u0006\u020c\u020d\f\u0004\u0002",
    "\u0002\u020d\u020e\t\f\u0002\u0002\u020e\u0210\u0005d3\u0005\u020f\u01fd",
    "\u0003\u0002\u0002\u0002\u020f\u0200\u0003\u0002\u0002\u0002\u020f\u0203",
    "\u0003\u0002\u0002\u0002\u020f\u0206\u0003\u0002\u0002\u0002\u020f\u0209",
    "\u0003\u0002\u0002\u0002\u020f\u020c\u0003\u0002\u0002\u0002\u0210\u0213",
    "\u0003\u0002\u0002\u0002\u0211\u020f\u0003\u0002\u0002\u0002\u0211\u0212",
    "\u0003\u0002\u0002\u0002\u0212e\u0003\u0002\u0002\u0002\u0213\u0211",
    "\u0003\u0002\u0002\u0002\u0214\u0215\u0005d3\u0002\u0215\u0216\t\r\u0002",
    "\u0002\u0216\u0217\u0005d3\u0002\u0217\u021d\u0003\u0002\u0002\u0002",
    "\u0218\u0219\u0007\u0014\u0002\u0002\u0219\u021a\u0005f4\u0002\u021a",
    "\u021b\u0007\u0015\u0002\u0002\u021b\u021d\u0003\u0002\u0002\u0002\u021c",
    "\u0214\u0003\u0002\u0002\u0002\u021c\u0218\u0003\u0002\u0002\u0002\u021d",
    "g\u0003\u0002\u0002\u0002\u021e\u021f\b5\u0001\u0002\u021f\u0220\u0007",
    "/\u0002\u0002\u0220\u0228\u0005h5\u0007\u0221\u0228\u0005d3\u0002\u0222",
    "\u0228\u0005f4\u0002\u0223\u0224\u0007\u0014\u0002\u0002\u0224\u0225",
    "\u0005h5\u0002\u0225\u0226\u0007\u0015\u0002\u0002\u0226\u0228\u0003",
    "\u0002\u0002\u0002\u0227\u021e\u0003\u0002\u0002\u0002\u0227\u0221\u0003",
    "\u0002\u0002\u0002\u0227\u0222\u0003\u0002\u0002\u0002\u0227\u0223\u0003",
    "\u0002\u0002\u0002\u0228\u022e\u0003\u0002\u0002\u0002\u0229\u022a\f",
    "\u0004\u0002\u0002\u022a\u022b\t\u000e\u0002\u0002\u022b\u022d\u0005",
    "h5\u0005\u022c\u0229\u0003\u0002\u0002\u0002\u022d\u0230\u0003\u0002",
    "\u0002\u0002\u022e\u022c\u0003\u0002\u0002\u0002\u022e\u022f\u0003\u0002",
    "\u0002\u0002\u022fi\u0003\u0002\u0002\u0002\u0230\u022e\u0003\u0002",
    "\u0002\u0002\u0231\u0232\t\u000f\u0002\u0002\u0232k\u0003\u0002\u0002",
    "\u0002\u0233\u0237\u0005j6\u0002\u0234\u0237\u0007A\u0002\u0002\u0235",
    "\u0237\u0005\u001e\u0010\u0002\u0236\u0233\u0003\u0002\u0002\u0002\u0236",
    "\u0234\u0003\u0002\u0002\u0002\u0236\u0235\u0003\u0002\u0002\u0002\u0237",
    "m\u0003\u0002\u0002\u0002\u0238\u023c\u0005l7\u0002\u0239\u023c\u0005",
    " \u0011\u0002\u023a\u023c\u0007B\u0002\u0002\u023b\u0238\u0003\u0002",
    "\u0002\u0002\u023b\u0239\u0003\u0002\u0002\u0002\u023b\u023a\u0003\u0002",
    "\u0002\u0002\u023co\u0003\u0002\u0002\u0002=v|\u0082\u0087\u0090\u009a",
    "\u00a3\u00ad\u00b0\u00b5\u00c4\u00cd\u00d0\u00d8\u00e1\u00e8\u00ec\u00fa",
    "\u00fd\u0104\u0109\u010c\u0114\u0120\u0123\u012b\u0131\u0141\u0144\u0147",
    "\u014c\u0156\u015d\u0165\u016d\u0174\u0185\u019a\u019e\u01a3\u01aa\u01b0",
    "\u01ba\u01c2\u01c6\u01ca\u01d0\u01d4\u01db\u01df\u01e7\u01fb\u020f\u0211",
    "\u021c\u0227\u022e\u0236\u023b"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'module'", "'pipeline'", "'flow'", "'use'", 
                     "'config'", "'default'", "'const'", "'if'", "'else'", 
                     "'for'", "'in'", "'void'", "'while'", "'true'", "'false'", 
                     "'ring'", "';'", "'('", "')'", "'{'", "'}'", "'['", 
                     "']'", "','", "'::'", "':'", "'.'", "'+'", "'-'", "'*'", 
                     "'/'", "'%'", "'**'", "'(*)'", "'(.)'", "'<'", "'>'", 
                     "'<='", "'>='", "'=='", "'!='", "'='", "'&&'", "'||'", 
                     "'!'", "'<<'", "'>>'", null, "'|'", "'~'", "'^'", null, 
                     "'@effects'", "':='", "'int'", "'float'", "'boolean'", 
                     "'return'" ];

var symbolicNames = [ null, "MODULE", "PIPELINE", "FLOW", "USE", "CONFIG", 
                      "DEFAULT", "CONST", "IF", "ELSE", "FOR", "IN", "VOID", 
                      "WHILE", "TRUE", "FALSE", "RING", "SEMI", "LP", "RP", 
                      "LB", "RB", "LS", "RS", "COMMA", "DCOLON", "COLON", 
                      "PERIOD", "PLUS", "MINUS", "MUL", "DIV", "MOD", "POW", 
                      "HPROD", "CAT", "LT", "GT", "LTE", "GTE", "EQ", "NEQ", 
                      "ASSIGN", "LAND", "LOR", "LNOT", "LSHIFT", "RSHIFT", 
                      "BAND", "BOR", "BNOT", "BXOR", "ADDRESSOF", "EFFECTS", 
                      "EASSIGN", "INT", "FLOAT", "BOOLEAN", "RETURN", "Identifier", 
                      "IntegerConstant", "FloatingConstant", "DigitSequence", 
                      "CharacterConstant", "StringLiteral", "Whitespace", 
                      "Newline", "BlockComment", "LineComment" ];

var ruleNames =  [ "module", "effectsDef", "effectStmt", "effectTarget", 
                   "effectParam", "effectCtx", "effectSpec", "effectExpr", 
                   "effectTerm", "pipelineDef", "pipelineBlock", "pipelineEntry", 
                   "pipelineList", "useSpec", "booleanLiteral", "arrayLiteral", 
                   "initValue", "varIdDef", "varDef", "dimExpr", "dimValue", 
                   "dimensionSpec", "intVal", "numVal", "rangeType", "castableType", 
                   "primitiveType", "varType", "flowType", "formalParam", 
                   "formalParams", "stmtBlock", "elseStmt", "ifStmt", "identifierList", 
                   "forStmt", "whileStmt", "assignStmt", "returnStmt", "stmt", 
                   "funcDef", "qualIdentifier", "cppQualIdentifier", "functionCall", 
                   "actualParam", "actualParams", "arrayExpr", "addressExpr", 
                   "castExpr", "basicExpr", "relExpr", "expr", "numConstant", 
                   "exprConstant", "literal" ];

function VerticalThings (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

VerticalThings.prototype = Object.create(antlr4.Parser.prototype);
VerticalThings.prototype.constructor = VerticalThings;

Object.defineProperty(VerticalThings.prototype, "atn", {
	get : function() {
		return atn;
	}
});

VerticalThings.EOF = antlr4.Token.EOF;
VerticalThings.MODULE = 1;
VerticalThings.PIPELINE = 2;
VerticalThings.FLOW = 3;
VerticalThings.USE = 4;
VerticalThings.CONFIG = 5;
VerticalThings.DEFAULT = 6;
VerticalThings.CONST = 7;
VerticalThings.IF = 8;
VerticalThings.ELSE = 9;
VerticalThings.FOR = 10;
VerticalThings.IN = 11;
VerticalThings.VOID = 12;
VerticalThings.WHILE = 13;
VerticalThings.TRUE = 14;
VerticalThings.FALSE = 15;
VerticalThings.RING = 16;
VerticalThings.SEMI = 17;
VerticalThings.LP = 18;
VerticalThings.RP = 19;
VerticalThings.LB = 20;
VerticalThings.RB = 21;
VerticalThings.LS = 22;
VerticalThings.RS = 23;
VerticalThings.COMMA = 24;
VerticalThings.DCOLON = 25;
VerticalThings.COLON = 26;
VerticalThings.PERIOD = 27;
VerticalThings.PLUS = 28;
VerticalThings.MINUS = 29;
VerticalThings.MUL = 30;
VerticalThings.DIV = 31;
VerticalThings.MOD = 32;
VerticalThings.POW = 33;
VerticalThings.HPROD = 34;
VerticalThings.CAT = 35;
VerticalThings.LT = 36;
VerticalThings.GT = 37;
VerticalThings.LTE = 38;
VerticalThings.GTE = 39;
VerticalThings.EQ = 40;
VerticalThings.NEQ = 41;
VerticalThings.ASSIGN = 42;
VerticalThings.LAND = 43;
VerticalThings.LOR = 44;
VerticalThings.LNOT = 45;
VerticalThings.LSHIFT = 46;
VerticalThings.RSHIFT = 47;
VerticalThings.BAND = 48;
VerticalThings.BOR = 49;
VerticalThings.BNOT = 50;
VerticalThings.BXOR = 51;
VerticalThings.ADDRESSOF = 52;
VerticalThings.EFFECTS = 53;
VerticalThings.EASSIGN = 54;
VerticalThings.INT = 55;
VerticalThings.FLOAT = 56;
VerticalThings.BOOLEAN = 57;
VerticalThings.RETURN = 58;
VerticalThings.Identifier = 59;
VerticalThings.IntegerConstant = 60;
VerticalThings.FloatingConstant = 61;
VerticalThings.DigitSequence = 62;
VerticalThings.CharacterConstant = 63;
VerticalThings.StringLiteral = 64;
VerticalThings.Whitespace = 65;
VerticalThings.Newline = 66;
VerticalThings.BlockComment = 67;
VerticalThings.LineComment = 68;

VerticalThings.RULE_module = 0;
VerticalThings.RULE_effectsDef = 1;
VerticalThings.RULE_effectStmt = 2;
VerticalThings.RULE_effectTarget = 3;
VerticalThings.RULE_effectParam = 4;
VerticalThings.RULE_effectCtx = 5;
VerticalThings.RULE_effectSpec = 6;
VerticalThings.RULE_effectExpr = 7;
VerticalThings.RULE_effectTerm = 8;
VerticalThings.RULE_pipelineDef = 9;
VerticalThings.RULE_pipelineBlock = 10;
VerticalThings.RULE_pipelineEntry = 11;
VerticalThings.RULE_pipelineList = 12;
VerticalThings.RULE_useSpec = 13;
VerticalThings.RULE_booleanLiteral = 14;
VerticalThings.RULE_arrayLiteral = 15;
VerticalThings.RULE_initValue = 16;
VerticalThings.RULE_varIdDef = 17;
VerticalThings.RULE_varDef = 18;
VerticalThings.RULE_dimExpr = 19;
VerticalThings.RULE_dimValue = 20;
VerticalThings.RULE_dimensionSpec = 21;
VerticalThings.RULE_intVal = 22;
VerticalThings.RULE_numVal = 23;
VerticalThings.RULE_rangeType = 24;
VerticalThings.RULE_castableType = 25;
VerticalThings.RULE_primitiveType = 26;
VerticalThings.RULE_varType = 27;
VerticalThings.RULE_flowType = 28;
VerticalThings.RULE_formalParam = 29;
VerticalThings.RULE_formalParams = 30;
VerticalThings.RULE_stmtBlock = 31;
VerticalThings.RULE_elseStmt = 32;
VerticalThings.RULE_ifStmt = 33;
VerticalThings.RULE_identifierList = 34;
VerticalThings.RULE_forStmt = 35;
VerticalThings.RULE_whileStmt = 36;
VerticalThings.RULE_assignStmt = 37;
VerticalThings.RULE_returnStmt = 38;
VerticalThings.RULE_stmt = 39;
VerticalThings.RULE_funcDef = 40;
VerticalThings.RULE_qualIdentifier = 41;
VerticalThings.RULE_cppQualIdentifier = 42;
VerticalThings.RULE_functionCall = 43;
VerticalThings.RULE_actualParam = 44;
VerticalThings.RULE_actualParams = 45;
VerticalThings.RULE_arrayExpr = 46;
VerticalThings.RULE_addressExpr = 47;
VerticalThings.RULE_castExpr = 48;
VerticalThings.RULE_basicExpr = 49;
VerticalThings.RULE_relExpr = 50;
VerticalThings.RULE_expr = 51;
VerticalThings.RULE_numConstant = 52;
VerticalThings.RULE_exprConstant = 53;
VerticalThings.RULE_literal = 54;

function ModuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_module;
    return this;
}

ModuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModuleContext.prototype.constructor = ModuleContext;

ModuleContext.prototype.MODULE = function() {
    return this.getToken(VerticalThings.MODULE, 0);
};

ModuleContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

ModuleContext.prototype.SEMI = function() {
    return this.getToken(VerticalThings.SEMI, 0);
};

ModuleContext.prototype.pipelineDef = function() {
    return this.getTypedRuleContext(PipelineDefContext,0);
};

ModuleContext.prototype.effectsDef = function() {
    return this.getTypedRuleContext(EffectsDefContext,0);
};

ModuleContext.prototype.useSpec = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(UseSpecContext);
    } else {
        return this.getTypedRuleContext(UseSpecContext,i);
    }
};

ModuleContext.prototype.varDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarDefContext);
    } else {
        return this.getTypedRuleContext(VarDefContext,i);
    }
};

ModuleContext.prototype.funcDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FuncDefContext);
    } else {
        return this.getTypedRuleContext(FuncDefContext,i);
    }
};

ModuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterModule(this);
	}
};

ModuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitModule(this);
	}
};

ModuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitModule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.ModuleContext = ModuleContext;

VerticalThings.prototype.module = function() {

    var localctx = new ModuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, VerticalThings.RULE_module);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 110;
        this.match(VerticalThings.MODULE);
        this.state = 111;
        this.match(VerticalThings.Identifier);
        this.state = 112;
        this.match(VerticalThings.SEMI);
        this.state = 116;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VerticalThings.USE) {
            this.state = 113;
            this.useSpec();
            this.state = 118;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 122;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 119;
                this.varDef(); 
            }
            this.state = 124;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
        }

        this.state = 133;
        switch(this._input.LA(1)) {
        case VerticalThings.EOF:
        case VerticalThings.FLOW:
        case VerticalThings.DEFAULT:
        case VerticalThings.VOID:
        case VerticalThings.LS:
        case VerticalThings.INT:
        case VerticalThings.FLOAT:
        case VerticalThings.BOOLEAN:
        case VerticalThings.Identifier:
            this.state = 128;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VerticalThings.FLOW) | (1 << VerticalThings.DEFAULT) | (1 << VerticalThings.VOID) | (1 << VerticalThings.LS))) !== 0) || ((((_la - 55)) & ~0x1f) == 0 && ((1 << (_la - 55)) & ((1 << (VerticalThings.INT - 55)) | (1 << (VerticalThings.FLOAT - 55)) | (1 << (VerticalThings.BOOLEAN - 55)) | (1 << (VerticalThings.Identifier - 55)))) !== 0)) {
                this.state = 125;
                this.funcDef();
                this.state = 130;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case VerticalThings.PIPELINE:
            this.state = 131;
            this.pipelineDef();
            break;
        case VerticalThings.EFFECTS:
            this.state = 132;
            this.effectsDef();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EffectsDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_effectsDef;
    return this;
}

EffectsDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EffectsDefContext.prototype.constructor = EffectsDefContext;

EffectsDefContext.prototype.EFFECTS = function() {
    return this.getToken(VerticalThings.EFFECTS, 0);
};

EffectsDefContext.prototype.LB = function() {
    return this.getToken(VerticalThings.LB, 0);
};

EffectsDefContext.prototype.RB = function() {
    return this.getToken(VerticalThings.RB, 0);
};

EffectsDefContext.prototype.effectStmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EffectStmtContext);
    } else {
        return this.getTypedRuleContext(EffectStmtContext,i);
    }
};

EffectsDefContext.prototype.SEMI = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.SEMI);
    } else {
        return this.getToken(VerticalThings.SEMI, i);
    }
};


EffectsDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterEffectsDef(this);
	}
};

EffectsDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitEffectsDef(this);
	}
};

EffectsDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitEffectsDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.EffectsDefContext = EffectsDefContext;

VerticalThings.prototype.effectsDef = function() {

    var localctx = new EffectsDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, VerticalThings.RULE_effectsDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        this.match(VerticalThings.EFFECTS);
        this.state = 136;
        this.match(VerticalThings.LB);
        this.state = 142;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VerticalThings.Identifier) {
            this.state = 137;
            this.effectStmt();
            this.state = 138;
            this.match(VerticalThings.SEMI);
            this.state = 144;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 145;
        this.match(VerticalThings.RB);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EffectStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_effectStmt;
    return this;
}

EffectStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EffectStmtContext.prototype.constructor = EffectStmtContext;

EffectStmtContext.prototype.effectTarget = function() {
    return this.getTypedRuleContext(EffectTargetContext,0);
};

EffectStmtContext.prototype.EASSIGN = function() {
    return this.getToken(VerticalThings.EASSIGN, 0);
};

EffectStmtContext.prototype.effectSpec = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EffectSpecContext);
    } else {
        return this.getTypedRuleContext(EffectSpecContext,i);
    }
};

EffectStmtContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.COMMA);
    } else {
        return this.getToken(VerticalThings.COMMA, i);
    }
};


EffectStmtContext.prototype.effectCtx = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EffectCtxContext);
    } else {
        return this.getTypedRuleContext(EffectCtxContext,i);
    }
};

EffectStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterEffectStmt(this);
	}
};

EffectStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitEffectStmt(this);
	}
};

EffectStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitEffectStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.EffectStmtContext = EffectStmtContext;

VerticalThings.prototype.effectStmt = function() {

    var localctx = new EffectStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, VerticalThings.RULE_effectStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 147;
        this.effectTarget();
        this.state = 152;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VerticalThings.COMMA) {
            this.state = 148;
            this.match(VerticalThings.COMMA);
            this.state = 149;
            this.effectCtx();
            this.state = 154;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 155;
        this.match(VerticalThings.EASSIGN);
        this.state = 156;
        this.effectSpec();
        this.state = 161;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VerticalThings.COMMA) {
            this.state = 157;
            this.match(VerticalThings.COMMA);
            this.state = 158;
            this.effectSpec();
            this.state = 163;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EffectTargetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_effectTarget;
    return this;
}

EffectTargetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EffectTargetContext.prototype.constructor = EffectTargetContext;

EffectTargetContext.prototype.qualIdentifier = function() {
    return this.getTypedRuleContext(QualIdentifierContext,0);
};

EffectTargetContext.prototype.LP = function() {
    return this.getToken(VerticalThings.LP, 0);
};

EffectTargetContext.prototype.RP = function() {
    return this.getToken(VerticalThings.RP, 0);
};

EffectTargetContext.prototype.effectParam = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EffectParamContext);
    } else {
        return this.getTypedRuleContext(EffectParamContext,i);
    }
};

EffectTargetContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.COMMA);
    } else {
        return this.getToken(VerticalThings.COMMA, i);
    }
};


EffectTargetContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterEffectTarget(this);
	}
};

EffectTargetContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitEffectTarget(this);
	}
};

EffectTargetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitEffectTarget(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.EffectTargetContext = EffectTargetContext;

VerticalThings.prototype.effectTarget = function() {

    var localctx = new EffectTargetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, VerticalThings.RULE_effectTarget);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 164;
        this.qualIdentifier();
        this.state = 165;
        this.match(VerticalThings.LP);
        this.state = 174;
        _la = this._input.LA(1);
        if(_la===VerticalThings.ADDRESSOF || _la===VerticalThings.Identifier) {
            this.state = 166;
            this.effectParam();
            this.state = 171;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===VerticalThings.COMMA) {
                this.state = 167;
                this.match(VerticalThings.COMMA);
                this.state = 168;
                this.effectParam();
                this.state = 173;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 176;
        this.match(VerticalThings.RP);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EffectParamContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_effectParam;
    return this;
}

EffectParamContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EffectParamContext.prototype.constructor = EffectParamContext;

EffectParamContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

EffectParamContext.prototype.ADDRESSOF = function() {
    return this.getToken(VerticalThings.ADDRESSOF, 0);
};

EffectParamContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterEffectParam(this);
	}
};

EffectParamContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitEffectParam(this);
	}
};

EffectParamContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitEffectParam(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.EffectParamContext = EffectParamContext;

VerticalThings.prototype.effectParam = function() {

    var localctx = new EffectParamContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, VerticalThings.RULE_effectParam);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        _la = this._input.LA(1);
        if(_la===VerticalThings.ADDRESSOF) {
            this.state = 178;
            this.match(VerticalThings.ADDRESSOF);
        }

        this.state = 181;
        this.match(VerticalThings.Identifier);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EffectCtxContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_effectCtx;
    return this;
}

EffectCtxContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EffectCtxContext.prototype.constructor = EffectCtxContext;

EffectCtxContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.Identifier);
    } else {
        return this.getToken(VerticalThings.Identifier, i);
    }
};


EffectCtxContext.prototype.COLON = function() {
    return this.getToken(VerticalThings.COLON, 0);
};

EffectCtxContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterEffectCtx(this);
	}
};

EffectCtxContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitEffectCtx(this);
	}
};

EffectCtxContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitEffectCtx(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.EffectCtxContext = EffectCtxContext;

VerticalThings.prototype.effectCtx = function() {

    var localctx = new EffectCtxContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, VerticalThings.RULE_effectCtx);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 183;
        this.match(VerticalThings.Identifier);
        this.state = 184;
        this.match(VerticalThings.COLON);
        this.state = 185;
        this.match(VerticalThings.Identifier);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EffectSpecContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_effectSpec;
    return this;
}

EffectSpecContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EffectSpecContext.prototype.constructor = EffectSpecContext;

EffectSpecContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

EffectSpecContext.prototype.effectExpr = function() {
    return this.getTypedRuleContext(EffectExprContext,0);
};

EffectSpecContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterEffectSpec(this);
	}
};

EffectSpecContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitEffectSpec(this);
	}
};

EffectSpecContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitEffectSpec(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.EffectSpecContext = EffectSpecContext;

VerticalThings.prototype.effectSpec = function() {

    var localctx = new EffectSpecContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, VerticalThings.RULE_effectSpec);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 187;
        this.match(VerticalThings.Identifier);
        this.state = 188;
        this.effectExpr();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EffectExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_effectExpr;
    return this;
}

EffectExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EffectExprContext.prototype.constructor = EffectExprContext;

EffectExprContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

EffectExprContext.prototype.exprConstant = function() {
    return this.getTypedRuleContext(ExprConstantContext,0);
};

EffectExprContext.prototype.StringLiteral = function() {
    return this.getToken(VerticalThings.StringLiteral, 0);
};

EffectExprContext.prototype.effectTerm = function() {
    return this.getTypedRuleContext(EffectTermContext,0);
};

EffectExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterEffectExpr(this);
	}
};

EffectExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitEffectExpr(this);
	}
};

EffectExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitEffectExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.EffectExprContext = EffectExprContext;

VerticalThings.prototype.effectExpr = function() {

    var localctx = new EffectExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, VerticalThings.RULE_effectExpr);
    try {
        this.state = 194;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 190;
            this.match(VerticalThings.Identifier);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 191;
            this.exprConstant();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 192;
            this.match(VerticalThings.StringLiteral);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 193;
            this.effectTerm();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EffectTermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_effectTerm;
    return this;
}

EffectTermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EffectTermContext.prototype.constructor = EffectTermContext;

EffectTermContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

EffectTermContext.prototype.LP = function() {
    return this.getToken(VerticalThings.LP, 0);
};

EffectTermContext.prototype.RP = function() {
    return this.getToken(VerticalThings.RP, 0);
};

EffectTermContext.prototype.effectExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EffectExprContext);
    } else {
        return this.getTypedRuleContext(EffectExprContext,i);
    }
};

EffectTermContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.COMMA);
    } else {
        return this.getToken(VerticalThings.COMMA, i);
    }
};


EffectTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterEffectTerm(this);
	}
};

EffectTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitEffectTerm(this);
	}
};

EffectTermContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitEffectTerm(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.EffectTermContext = EffectTermContext;

VerticalThings.prototype.effectTerm = function() {

    var localctx = new EffectTermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, VerticalThings.RULE_effectTerm);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 196;
        this.match(VerticalThings.Identifier);
        this.state = 197;
        this.match(VerticalThings.LP);
        this.state = 206;
        _la = this._input.LA(1);
        if(_la===VerticalThings.TRUE || _la===VerticalThings.FALSE || ((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (VerticalThings.Identifier - 59)) | (1 << (VerticalThings.IntegerConstant - 59)) | (1 << (VerticalThings.FloatingConstant - 59)) | (1 << (VerticalThings.CharacterConstant - 59)) | (1 << (VerticalThings.StringLiteral - 59)))) !== 0)) {
            this.state = 198;
            this.effectExpr();
            this.state = 203;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===VerticalThings.COMMA) {
                this.state = 199;
                this.match(VerticalThings.COMMA);
                this.state = 200;
                this.effectExpr();
                this.state = 205;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 208;
        this.match(VerticalThings.RP);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PipelineDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_pipelineDef;
    return this;
}

PipelineDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PipelineDefContext.prototype.constructor = PipelineDefContext;

PipelineDefContext.prototype.PIPELINE = function() {
    return this.getToken(VerticalThings.PIPELINE, 0);
};

PipelineDefContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

PipelineDefContext.prototype.pipelineBlock = function() {
    return this.getTypedRuleContext(PipelineBlockContext,0);
};

PipelineDefContext.prototype.SEMI = function() {
    return this.getToken(VerticalThings.SEMI, 0);
};

PipelineDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterPipelineDef(this);
	}
};

PipelineDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitPipelineDef(this);
	}
};

PipelineDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitPipelineDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.PipelineDefContext = PipelineDefContext;

VerticalThings.prototype.pipelineDef = function() {

    var localctx = new PipelineDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, VerticalThings.RULE_pipelineDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 210;
        this.match(VerticalThings.PIPELINE);
        this.state = 211;
        this.match(VerticalThings.Identifier);
        this.state = 212;
        this.pipelineBlock();
        this.state = 214;
        _la = this._input.LA(1);
        if(_la===VerticalThings.SEMI) {
            this.state = 213;
            this.match(VerticalThings.SEMI);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PipelineBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_pipelineBlock;
    return this;
}

PipelineBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PipelineBlockContext.prototype.constructor = PipelineBlockContext;

PipelineBlockContext.prototype.LB = function() {
    return this.getToken(VerticalThings.LB, 0);
};

PipelineBlockContext.prototype.pipelineList = function() {
    return this.getTypedRuleContext(PipelineListContext,0);
};

PipelineBlockContext.prototype.RB = function() {
    return this.getToken(VerticalThings.RB, 0);
};

PipelineBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterPipelineBlock(this);
	}
};

PipelineBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitPipelineBlock(this);
	}
};

PipelineBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitPipelineBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.PipelineBlockContext = PipelineBlockContext;

VerticalThings.prototype.pipelineBlock = function() {

    var localctx = new PipelineBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, VerticalThings.RULE_pipelineBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 216;
        this.match(VerticalThings.LB);
        this.state = 217;
        this.pipelineList();
        this.state = 218;
        this.match(VerticalThings.RB);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PipelineEntryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_pipelineEntry;
    return this;
}

PipelineEntryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PipelineEntryContext.prototype.constructor = PipelineEntryContext;

PipelineEntryContext.prototype.qualIdentifier = function() {
    return this.getTypedRuleContext(QualIdentifierContext,0);
};

PipelineEntryContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

PipelineEntryContext.prototype.pipelineBlock = function() {
    return this.getTypedRuleContext(PipelineBlockContext,0);
};

PipelineEntryContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterPipelineEntry(this);
	}
};

PipelineEntryContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitPipelineEntry(this);
	}
};

PipelineEntryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitPipelineEntry(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.PipelineEntryContext = PipelineEntryContext;

VerticalThings.prototype.pipelineEntry = function() {

    var localctx = new PipelineEntryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, VerticalThings.RULE_pipelineEntry);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 223;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        switch(la_) {
        case 1:
            this.state = 220;
            this.qualIdentifier();
            break;

        case 2:
            this.state = 221;
            this.functionCall();
            break;

        case 3:
            this.state = 222;
            this.pipelineBlock();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PipelineListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_pipelineList;
    return this;
}

PipelineListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PipelineListContext.prototype.constructor = PipelineListContext;

PipelineListContext.prototype.pipelineEntry = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PipelineEntryContext);
    } else {
        return this.getTypedRuleContext(PipelineEntryContext,i);
    }
};

PipelineListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.COMMA);
    } else {
        return this.getToken(VerticalThings.COMMA, i);
    }
};


PipelineListContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterPipelineList(this);
	}
};

PipelineListContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitPipelineList(this);
	}
};

PipelineListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitPipelineList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.PipelineListContext = PipelineListContext;

VerticalThings.prototype.pipelineList = function() {

    var localctx = new PipelineListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, VerticalThings.RULE_pipelineList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 225;
        this.pipelineEntry();
        this.state = 230;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 226;
                this.match(VerticalThings.COMMA);
                this.state = 227;
                this.pipelineEntry(); 
            }
            this.state = 232;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
        }

        this.state = 234;
        _la = this._input.LA(1);
        if(_la===VerticalThings.COMMA) {
            this.state = 233;
            this.match(VerticalThings.COMMA);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UseSpecContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_useSpec;
    return this;
}

UseSpecContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UseSpecContext.prototype.constructor = UseSpecContext;

UseSpecContext.prototype.USE = function() {
    return this.getToken(VerticalThings.USE, 0);
};

UseSpecContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

UseSpecContext.prototype.SEMI = function() {
    return this.getToken(VerticalThings.SEMI, 0);
};

UseSpecContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterUseSpec(this);
	}
};

UseSpecContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitUseSpec(this);
	}
};

UseSpecContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitUseSpec(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.UseSpecContext = UseSpecContext;

VerticalThings.prototype.useSpec = function() {

    var localctx = new UseSpecContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, VerticalThings.RULE_useSpec);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 236;
        this.match(VerticalThings.USE);
        this.state = 237;
        this.match(VerticalThings.Identifier);
        this.state = 238;
        this.match(VerticalThings.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BooleanLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_booleanLiteral;
    return this;
}

BooleanLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BooleanLiteralContext.prototype.constructor = BooleanLiteralContext;

BooleanLiteralContext.prototype.TRUE = function() {
    return this.getToken(VerticalThings.TRUE, 0);
};

BooleanLiteralContext.prototype.FALSE = function() {
    return this.getToken(VerticalThings.FALSE, 0);
};

BooleanLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterBooleanLiteral(this);
	}
};

BooleanLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitBooleanLiteral(this);
	}
};

BooleanLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitBooleanLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.BooleanLiteralContext = BooleanLiteralContext;

VerticalThings.prototype.booleanLiteral = function() {

    var localctx = new BooleanLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, VerticalThings.RULE_booleanLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240;
        _la = this._input.LA(1);
        if(!(_la===VerticalThings.TRUE || _la===VerticalThings.FALSE)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrayLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_arrayLiteral;
    return this;
}

ArrayLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayLiteralContext.prototype.constructor = ArrayLiteralContext;

ArrayLiteralContext.prototype.LB = function() {
    return this.getToken(VerticalThings.LB, 0);
};

ArrayLiteralContext.prototype.RB = function() {
    return this.getToken(VerticalThings.RB, 0);
};

ArrayLiteralContext.prototype.literal = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LiteralContext);
    } else {
        return this.getTypedRuleContext(LiteralContext,i);
    }
};

ArrayLiteralContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.COMMA);
    } else {
        return this.getToken(VerticalThings.COMMA, i);
    }
};


ArrayLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterArrayLiteral(this);
	}
};

ArrayLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitArrayLiteral(this);
	}
};

ArrayLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitArrayLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.ArrayLiteralContext = ArrayLiteralContext;

VerticalThings.prototype.arrayLiteral = function() {

    var localctx = new ArrayLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, VerticalThings.RULE_arrayLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 242;
        this.match(VerticalThings.LB);
        this.state = 251;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VerticalThings.TRUE) | (1 << VerticalThings.FALSE) | (1 << VerticalThings.LB))) !== 0) || ((((_la - 60)) & ~0x1f) == 0 && ((1 << (_la - 60)) & ((1 << (VerticalThings.IntegerConstant - 60)) | (1 << (VerticalThings.FloatingConstant - 60)) | (1 << (VerticalThings.CharacterConstant - 60)) | (1 << (VerticalThings.StringLiteral - 60)))) !== 0)) {
            this.state = 243;
            this.literal();
            this.state = 248;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===VerticalThings.COMMA) {
                this.state = 244;
                this.match(VerticalThings.COMMA);
                this.state = 245;
                this.literal();
                this.state = 250;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 253;
        this.match(VerticalThings.RB);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InitValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_initValue;
    return this;
}

InitValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InitValueContext.prototype.constructor = InitValueContext;

InitValueContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

InitValueContext.prototype.StringLiteral = function() {
    return this.getToken(VerticalThings.StringLiteral, 0);
};

InitValueContext.prototype.arrayLiteral = function() {
    return this.getTypedRuleContext(ArrayLiteralContext,0);
};

InitValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterInitValue(this);
	}
};

InitValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitInitValue(this);
	}
};

InitValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitInitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.InitValueContext = InitValueContext;

VerticalThings.prototype.initValue = function() {

    var localctx = new InitValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, VerticalThings.RULE_initValue);
    try {
        this.state = 258;
        switch(this._input.LA(1)) {
        case VerticalThings.TRUE:
        case VerticalThings.FALSE:
        case VerticalThings.LP:
        case VerticalThings.MINUS:
        case VerticalThings.LNOT:
        case VerticalThings.BNOT:
        case VerticalThings.ADDRESSOF:
        case VerticalThings.INT:
        case VerticalThings.FLOAT:
        case VerticalThings.BOOLEAN:
        case VerticalThings.Identifier:
        case VerticalThings.IntegerConstant:
        case VerticalThings.FloatingConstant:
        case VerticalThings.CharacterConstant:
            this.enterOuterAlt(localctx, 1);
            this.state = 255;
            this.expr(0);
            break;
        case VerticalThings.StringLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 256;
            this.match(VerticalThings.StringLiteral);
            break;
        case VerticalThings.LB:
            this.enterOuterAlt(localctx, 3);
            this.state = 257;
            this.arrayLiteral();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VarIdDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_varIdDef;
    return this;
}

VarIdDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarIdDefContext.prototype.constructor = VarIdDefContext;

VarIdDefContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

VarIdDefContext.prototype.ASSIGN = function() {
    return this.getToken(VerticalThings.ASSIGN, 0);
};

VarIdDefContext.prototype.initValue = function() {
    return this.getTypedRuleContext(InitValueContext,0);
};

VarIdDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterVarIdDef(this);
	}
};

VarIdDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitVarIdDef(this);
	}
};

VarIdDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitVarIdDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.VarIdDefContext = VarIdDefContext;

VerticalThings.prototype.varIdDef = function() {

    var localctx = new VarIdDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, VerticalThings.RULE_varIdDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 260;
        this.match(VerticalThings.Identifier);
        this.state = 263;
        _la = this._input.LA(1);
        if(_la===VerticalThings.ASSIGN) {
            this.state = 261;
            this.match(VerticalThings.ASSIGN);
            this.state = 262;
            this.initValue();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VarDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_varDef;
    return this;
}

VarDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarDefContext.prototype.constructor = VarDefContext;

VarDefContext.prototype.varType = function() {
    return this.getTypedRuleContext(VarTypeContext,0);
};

VarDefContext.prototype.varIdDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarIdDefContext);
    } else {
        return this.getTypedRuleContext(VarIdDefContext,i);
    }
};

VarDefContext.prototype.SEMI = function() {
    return this.getToken(VerticalThings.SEMI, 0);
};

VarDefContext.prototype.CONST = function() {
    return this.getToken(VerticalThings.CONST, 0);
};

VarDefContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.COMMA);
    } else {
        return this.getToken(VerticalThings.COMMA, i);
    }
};


VarDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterVarDef(this);
	}
};

VarDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitVarDef(this);
	}
};

VarDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitVarDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.VarDefContext = VarDefContext;

VerticalThings.prototype.varDef = function() {

    var localctx = new VarDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, VerticalThings.RULE_varDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 266;
        _la = this._input.LA(1);
        if(_la===VerticalThings.CONST) {
            this.state = 265;
            this.match(VerticalThings.CONST);
        }

        this.state = 268;
        this.varType();
        this.state = 269;
        this.varIdDef();
        this.state = 274;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VerticalThings.COMMA) {
            this.state = 270;
            this.match(VerticalThings.COMMA);
            this.state = 271;
            this.varIdDef();
            this.state = 276;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 277;
        this.match(VerticalThings.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DimExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_dimExpr;
    this.op = null; // Token
    return this;
}

DimExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DimExprContext.prototype.constructor = DimExprContext;

DimExprContext.prototype.intVal = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IntValContext);
    } else {
        return this.getTypedRuleContext(IntValContext,i);
    }
};

DimExprContext.prototype.PLUS = function() {
    return this.getToken(VerticalThings.PLUS, 0);
};

DimExprContext.prototype.MUL = function() {
    return this.getToken(VerticalThings.MUL, 0);
};

DimExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterDimExpr(this);
	}
};

DimExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitDimExpr(this);
	}
};

DimExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitDimExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.DimExprContext = DimExprContext;

VerticalThings.prototype.dimExpr = function() {

    var localctx = new DimExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, VerticalThings.RULE_dimExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 279;
        this.intVal();
        this.state = 280;
        localctx.op = this._input.LT(1);
        _la = this._input.LA(1);
        if(!(_la===VerticalThings.PLUS || _la===VerticalThings.MUL)) {
            localctx.op = this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 281;
        this.intVal();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DimValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_dimValue;
    return this;
}

DimValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DimValueContext.prototype.constructor = DimValueContext;

DimValueContext.prototype.IntegerConstant = function() {
    return this.getToken(VerticalThings.IntegerConstant, 0);
};

DimValueContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

DimValueContext.prototype.dimExpr = function() {
    return this.getTypedRuleContext(DimExprContext,0);
};

DimValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterDimValue(this);
	}
};

DimValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitDimValue(this);
	}
};

DimValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitDimValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.DimValueContext = DimValueContext;

VerticalThings.prototype.dimValue = function() {

    var localctx = new DimValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, VerticalThings.RULE_dimValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 286;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        switch(la_) {
        case 1:
            this.state = 283;
            this.match(VerticalThings.IntegerConstant);
            break;

        case 2:
            this.state = 284;
            this.match(VerticalThings.Identifier);
            break;

        case 3:
            this.state = 285;
            this.dimExpr();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DimensionSpecContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_dimensionSpec;
    return this;
}

DimensionSpecContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DimensionSpecContext.prototype.constructor = DimensionSpecContext;

DimensionSpecContext.prototype.RING = function() {
    return this.getToken(VerticalThings.RING, 0);
};

DimensionSpecContext.prototype.LS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.LS);
    } else {
        return this.getToken(VerticalThings.LS, i);
    }
};


DimensionSpecContext.prototype.dimValue = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DimValueContext);
    } else {
        return this.getTypedRuleContext(DimValueContext,i);
    }
};

DimensionSpecContext.prototype.RS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.RS);
    } else {
        return this.getToken(VerticalThings.RS, i);
    }
};


DimensionSpecContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterDimensionSpec(this);
	}
};

DimensionSpecContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitDimensionSpec(this);
	}
};

DimensionSpecContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitDimensionSpec(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.DimensionSpecContext = DimensionSpecContext;

VerticalThings.prototype.dimensionSpec = function() {

    var localctx = new DimensionSpecContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, VerticalThings.RULE_dimensionSpec);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 289;
        _la = this._input.LA(1);
        if(_la===VerticalThings.RING) {
            this.state = 288;
            this.match(VerticalThings.RING);
        }

        this.state = 295; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 291;
        		this.match(VerticalThings.LS);
        		this.state = 292;
        		this.dimValue();
        		this.state = 293;
        		this.match(VerticalThings.RS);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 297; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,25, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IntValContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_intVal;
    return this;
}

IntValContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntValContext.prototype.constructor = IntValContext;

IntValContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

IntValContext.prototype.IntegerConstant = function() {
    return this.getToken(VerticalThings.IntegerConstant, 0);
};

IntValContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterIntVal(this);
	}
};

IntValContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitIntVal(this);
	}
};

IntValContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitIntVal(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.IntValContext = IntValContext;

VerticalThings.prototype.intVal = function() {

    var localctx = new IntValContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, VerticalThings.RULE_intVal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 299;
        _la = this._input.LA(1);
        if(!(_la===VerticalThings.Identifier || _la===VerticalThings.IntegerConstant)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumValContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_numVal;
    return this;
}

NumValContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumValContext.prototype.constructor = NumValContext;

NumValContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

NumValContext.prototype.numConstant = function() {
    return this.getTypedRuleContext(NumConstantContext,0);
};

NumValContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterNumVal(this);
	}
};

NumValContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitNumVal(this);
	}
};

NumValContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitNumVal(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.NumValContext = NumValContext;

VerticalThings.prototype.numVal = function() {

    var localctx = new NumValContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, VerticalThings.RULE_numVal);
    try {
        this.state = 303;
        switch(this._input.LA(1)) {
        case VerticalThings.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 301;
            this.match(VerticalThings.Identifier);
            break;
        case VerticalThings.IntegerConstant:
        case VerticalThings.FloatingConstant:
            this.enterOuterAlt(localctx, 2);
            this.state = 302;
            this.numConstant();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RangeTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_rangeType;
    return this;
}

RangeTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RangeTypeContext.prototype.constructor = RangeTypeContext;

RangeTypeContext.prototype.LS = function() {
    return this.getToken(VerticalThings.LS, 0);
};

RangeTypeContext.prototype.numVal = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumValContext);
    } else {
        return this.getTypedRuleContext(NumValContext,i);
    }
};

RangeTypeContext.prototype.RS = function() {
    return this.getToken(VerticalThings.RS, 0);
};

RangeTypeContext.prototype.COMMA = function() {
    return this.getToken(VerticalThings.COMMA, 0);
};

RangeTypeContext.prototype.COLON = function() {
    return this.getToken(VerticalThings.COLON, 0);
};

RangeTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterRangeType(this);
	}
};

RangeTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitRangeType(this);
	}
};

RangeTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitRangeType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.RangeTypeContext = RangeTypeContext;

VerticalThings.prototype.rangeType = function() {

    var localctx = new RangeTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, VerticalThings.RULE_rangeType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 305;
        this.match(VerticalThings.LS);
        this.state = 306;
        this.numVal();
        this.state = 307;
        _la = this._input.LA(1);
        if(!(_la===VerticalThings.COMMA || _la===VerticalThings.COLON)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 308;
        this.numVal();
        this.state = 309;
        this.match(VerticalThings.RS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CastableTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_castableType;
    return this;
}

CastableTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CastableTypeContext.prototype.constructor = CastableTypeContext;

CastableTypeContext.prototype.INT = function() {
    return this.getToken(VerticalThings.INT, 0);
};

CastableTypeContext.prototype.FLOAT = function() {
    return this.getToken(VerticalThings.FLOAT, 0);
};

CastableTypeContext.prototype.BOOLEAN = function() {
    return this.getToken(VerticalThings.BOOLEAN, 0);
};

CastableTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterCastableType(this);
	}
};

CastableTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitCastableType(this);
	}
};

CastableTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitCastableType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.CastableTypeContext = CastableTypeContext;

VerticalThings.prototype.castableType = function() {

    var localctx = new CastableTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, VerticalThings.RULE_castableType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 311;
        _la = this._input.LA(1);
        if(!(((((_la - 55)) & ~0x1f) == 0 && ((1 << (_la - 55)) & ((1 << (VerticalThings.INT - 55)) | (1 << (VerticalThings.FLOAT - 55)) | (1 << (VerticalThings.BOOLEAN - 55)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrimitiveTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_primitiveType;
    return this;
}

PrimitiveTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimitiveTypeContext.prototype.constructor = PrimitiveTypeContext;

PrimitiveTypeContext.prototype.INT = function() {
    return this.getToken(VerticalThings.INT, 0);
};

PrimitiveTypeContext.prototype.FLOAT = function() {
    return this.getToken(VerticalThings.FLOAT, 0);
};

PrimitiveTypeContext.prototype.BOOLEAN = function() {
    return this.getToken(VerticalThings.BOOLEAN, 0);
};

PrimitiveTypeContext.prototype.VOID = function() {
    return this.getToken(VerticalThings.VOID, 0);
};

PrimitiveTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterPrimitiveType(this);
	}
};

PrimitiveTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitPrimitiveType(this);
	}
};

PrimitiveTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitPrimitiveType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.PrimitiveTypeContext = PrimitiveTypeContext;

VerticalThings.prototype.primitiveType = function() {

    var localctx = new PrimitiveTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, VerticalThings.RULE_primitiveType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 313;
        _la = this._input.LA(1);
        if(!(_la===VerticalThings.VOID || ((((_la - 55)) & ~0x1f) == 0 && ((1 << (_la - 55)) & ((1 << (VerticalThings.INT - 55)) | (1 << (VerticalThings.FLOAT - 55)) | (1 << (VerticalThings.BOOLEAN - 55)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VarTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_varType;
    return this;
}

VarTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarTypeContext.prototype.constructor = VarTypeContext;

VarTypeContext.prototype.qualIdentifier = function() {
    return this.getTypedRuleContext(QualIdentifierContext,0);
};

VarTypeContext.prototype.cppQualIdentifier = function() {
    return this.getTypedRuleContext(CppQualIdentifierContext,0);
};

VarTypeContext.prototype.rangeType = function() {
    return this.getTypedRuleContext(RangeTypeContext,0);
};

VarTypeContext.prototype.primitiveType = function() {
    return this.getTypedRuleContext(PrimitiveTypeContext,0);
};

VarTypeContext.prototype.dimensionSpec = function() {
    return this.getTypedRuleContext(DimensionSpecContext,0);
};

VarTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterVarType(this);
	}
};

VarTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitVarType(this);
	}
};

VarTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitVarType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.VarTypeContext = VarTypeContext;

VerticalThings.prototype.varType = function() {

    var localctx = new VarTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, VerticalThings.RULE_varType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 319;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        switch(la_) {
        case 1:
            this.state = 315;
            this.qualIdentifier();
            break;

        case 2:
            this.state = 316;
            this.cppQualIdentifier();
            break;

        case 3:
            this.state = 317;
            this.rangeType();
            break;

        case 4:
            this.state = 318;
            this.primitiveType();
            break;

        }
        this.state = 322;
        _la = this._input.LA(1);
        if(_la===VerticalThings.RING || _la===VerticalThings.LS) {
            this.state = 321;
            this.dimensionSpec();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FlowTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_flowType;
    return this;
}

FlowTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FlowTypeContext.prototype.constructor = FlowTypeContext;

FlowTypeContext.prototype.FLOW = function() {
    return this.getToken(VerticalThings.FLOW, 0);
};

FlowTypeContext.prototype.DEFAULT = function() {
    return this.getToken(VerticalThings.DEFAULT, 0);
};

FlowTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterFlowType(this);
	}
};

FlowTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitFlowType(this);
	}
};

FlowTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitFlowType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.FlowTypeContext = FlowTypeContext;

VerticalThings.prototype.flowType = function() {

    var localctx = new FlowTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, VerticalThings.RULE_flowType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 325;
        _la = this._input.LA(1);
        if(_la===VerticalThings.DEFAULT) {
            this.state = 324;
            this.match(VerticalThings.DEFAULT);
        }

        this.state = 327;
        this.match(VerticalThings.FLOW);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FormalParamContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_formalParam;
    return this;
}

FormalParamContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParamContext.prototype.constructor = FormalParamContext;

FormalParamContext.prototype.varType = function() {
    return this.getTypedRuleContext(VarTypeContext,0);
};

FormalParamContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

FormalParamContext.prototype.CONST = function() {
    return this.getToken(VerticalThings.CONST, 0);
};

FormalParamContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterFormalParam(this);
	}
};

FormalParamContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitFormalParam(this);
	}
};

FormalParamContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitFormalParam(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.FormalParamContext = FormalParamContext;

VerticalThings.prototype.formalParam = function() {

    var localctx = new FormalParamContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, VerticalThings.RULE_formalParam);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 330;
        _la = this._input.LA(1);
        if(_la===VerticalThings.CONST) {
            this.state = 329;
            this.match(VerticalThings.CONST);
        }

        this.state = 332;
        this.varType();
        this.state = 333;
        this.match(VerticalThings.Identifier);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FormalParamsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_formalParams;
    return this;
}

FormalParamsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParamsContext.prototype.constructor = FormalParamsContext;

FormalParamsContext.prototype.formalParam = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormalParamContext);
    } else {
        return this.getTypedRuleContext(FormalParamContext,i);
    }
};

FormalParamsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.COMMA);
    } else {
        return this.getToken(VerticalThings.COMMA, i);
    }
};


FormalParamsContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterFormalParams(this);
	}
};

FormalParamsContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitFormalParams(this);
	}
};

FormalParamsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitFormalParams(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.FormalParamsContext = FormalParamsContext;

VerticalThings.prototype.formalParams = function() {

    var localctx = new FormalParamsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, VerticalThings.RULE_formalParams);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 335;
        this.formalParam();
        this.state = 340;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VerticalThings.COMMA) {
            this.state = 336;
            this.match(VerticalThings.COMMA);
            this.state = 337;
            this.formalParam();
            this.state = 342;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StmtBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_stmtBlock;
    return this;
}

StmtBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtBlockContext.prototype.constructor = StmtBlockContext;

StmtBlockContext.prototype.LB = function() {
    return this.getToken(VerticalThings.LB, 0);
};

StmtBlockContext.prototype.RB = function() {
    return this.getToken(VerticalThings.RB, 0);
};

StmtBlockContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

StmtBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterStmtBlock(this);
	}
};

StmtBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitStmtBlock(this);
	}
};

StmtBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitStmtBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.StmtBlockContext = StmtBlockContext;

VerticalThings.prototype.stmtBlock = function() {

    var localctx = new StmtBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, VerticalThings.RULE_stmtBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 343;
        this.match(VerticalThings.LB);
        this.state = 347;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VerticalThings.IF) | (1 << VerticalThings.FOR) | (1 << VerticalThings.WHILE) | (1 << VerticalThings.LB))) !== 0) || _la===VerticalThings.RETURN || _la===VerticalThings.Identifier) {
            this.state = 344;
            this.stmt();
            this.state = 349;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 350;
        this.match(VerticalThings.RB);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElseStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_elseStmt;
    return this;
}

ElseStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseStmtContext.prototype.constructor = ElseStmtContext;

ElseStmtContext.prototype.ELSE = function() {
    return this.getToken(VerticalThings.ELSE, 0);
};

ElseStmtContext.prototype.stmtBlock = function() {
    return this.getTypedRuleContext(StmtBlockContext,0);
};

ElseStmtContext.prototype.ifStmt = function() {
    return this.getTypedRuleContext(IfStmtContext,0);
};

ElseStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterElseStmt(this);
	}
};

ElseStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitElseStmt(this);
	}
};

ElseStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitElseStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.ElseStmtContext = ElseStmtContext;

VerticalThings.prototype.elseStmt = function() {

    var localctx = new ElseStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, VerticalThings.RULE_elseStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 352;
        this.match(VerticalThings.ELSE);
        this.state = 355;
        switch(this._input.LA(1)) {
        case VerticalThings.LB:
            this.state = 353;
            this.stmtBlock();
            break;
        case VerticalThings.IF:
            this.state = 354;
            this.ifStmt();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_ifStmt;
    return this;
}

IfStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStmtContext.prototype.constructor = IfStmtContext;

IfStmtContext.prototype.IF = function() {
    return this.getToken(VerticalThings.IF, 0);
};

IfStmtContext.prototype.LP = function() {
    return this.getToken(VerticalThings.LP, 0);
};

IfStmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

IfStmtContext.prototype.RP = function() {
    return this.getToken(VerticalThings.RP, 0);
};

IfStmtContext.prototype.stmtBlock = function() {
    return this.getTypedRuleContext(StmtBlockContext,0);
};

IfStmtContext.prototype.elseStmt = function() {
    return this.getTypedRuleContext(ElseStmtContext,0);
};

IfStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterIfStmt(this);
	}
};

IfStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitIfStmt(this);
	}
};

IfStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitIfStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.IfStmtContext = IfStmtContext;

VerticalThings.prototype.ifStmt = function() {

    var localctx = new IfStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, VerticalThings.RULE_ifStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 357;
        this.match(VerticalThings.IF);
        this.state = 358;
        this.match(VerticalThings.LP);
        this.state = 359;
        this.expr(0);
        this.state = 360;
        this.match(VerticalThings.RP);
        this.state = 361;
        this.stmtBlock();
        this.state = 363;
        _la = this._input.LA(1);
        if(_la===VerticalThings.ELSE) {
            this.state = 362;
            this.elseStmt();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdentifierListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_identifierList;
    return this;
}

IdentifierListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierListContext.prototype.constructor = IdentifierListContext;

IdentifierListContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.Identifier);
    } else {
        return this.getToken(VerticalThings.Identifier, i);
    }
};


IdentifierListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.COMMA);
    } else {
        return this.getToken(VerticalThings.COMMA, i);
    }
};


IdentifierListContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterIdentifierList(this);
	}
};

IdentifierListContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitIdentifierList(this);
	}
};

IdentifierListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitIdentifierList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.IdentifierListContext = IdentifierListContext;

VerticalThings.prototype.identifierList = function() {

    var localctx = new IdentifierListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, VerticalThings.RULE_identifierList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 365;
        this.match(VerticalThings.Identifier);
        this.state = 370;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VerticalThings.COMMA) {
            this.state = 366;
            this.match(VerticalThings.COMMA);
            this.state = 367;
            this.match(VerticalThings.Identifier);
            this.state = 372;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ForStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_forStmt;
    return this;
}

ForStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForStmtContext.prototype.constructor = ForStmtContext;

ForStmtContext.prototype.FOR = function() {
    return this.getToken(VerticalThings.FOR, 0);
};

ForStmtContext.prototype.identifierList = function() {
    return this.getTypedRuleContext(IdentifierListContext,0);
};

ForStmtContext.prototype.IN = function() {
    return this.getToken(VerticalThings.IN, 0);
};

ForStmtContext.prototype.rangeType = function() {
    return this.getTypedRuleContext(RangeTypeContext,0);
};

ForStmtContext.prototype.stmtBlock = function() {
    return this.getTypedRuleContext(StmtBlockContext,0);
};

ForStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterForStmt(this);
	}
};

ForStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitForStmt(this);
	}
};

ForStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitForStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.ForStmtContext = ForStmtContext;

VerticalThings.prototype.forStmt = function() {

    var localctx = new ForStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, VerticalThings.RULE_forStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 373;
        this.match(VerticalThings.FOR);
        this.state = 374;
        this.identifierList();
        this.state = 375;
        this.match(VerticalThings.IN);
        this.state = 376;
        this.rangeType();
        this.state = 377;
        this.stmtBlock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WhileStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_whileStmt;
    return this;
}

WhileStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhileStmtContext.prototype.constructor = WhileStmtContext;

WhileStmtContext.prototype.WHILE = function() {
    return this.getToken(VerticalThings.WHILE, 0);
};

WhileStmtContext.prototype.LP = function() {
    return this.getToken(VerticalThings.LP, 0);
};

WhileStmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

WhileStmtContext.prototype.RP = function() {
    return this.getToken(VerticalThings.RP, 0);
};

WhileStmtContext.prototype.stmtBlock = function() {
    return this.getTypedRuleContext(StmtBlockContext,0);
};

WhileStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterWhileStmt(this);
	}
};

WhileStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitWhileStmt(this);
	}
};

WhileStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitWhileStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.WhileStmtContext = WhileStmtContext;

VerticalThings.prototype.whileStmt = function() {

    var localctx = new WhileStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, VerticalThings.RULE_whileStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 379;
        this.match(VerticalThings.WHILE);
        this.state = 380;
        this.match(VerticalThings.LP);
        this.state = 381;
        this.expr(0);
        this.state = 382;
        this.match(VerticalThings.RP);
        this.state = 383;
        this.stmtBlock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssignStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_assignStmt;
    return this;
}

AssignStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignStmtContext.prototype.constructor = AssignStmtContext;

AssignStmtContext.prototype.qualIdentifier = function() {
    return this.getTypedRuleContext(QualIdentifierContext,0);
};

AssignStmtContext.prototype.ASSIGN = function() {
    return this.getToken(VerticalThings.ASSIGN, 0);
};

AssignStmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

AssignStmtContext.prototype.dimensionSpec = function() {
    return this.getTypedRuleContext(DimensionSpecContext,0);
};

AssignStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterAssignStmt(this);
	}
};

AssignStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitAssignStmt(this);
	}
};

AssignStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitAssignStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.AssignStmtContext = AssignStmtContext;

VerticalThings.prototype.assignStmt = function() {

    var localctx = new AssignStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, VerticalThings.RULE_assignStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 385;
        this.qualIdentifier();
        this.state = 387;
        _la = this._input.LA(1);
        if(_la===VerticalThings.RING || _la===VerticalThings.LS) {
            this.state = 386;
            this.dimensionSpec();
        }

        this.state = 389;
        this.match(VerticalThings.ASSIGN);
        this.state = 390;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ReturnStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_returnStmt;
    return this;
}

ReturnStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnStmtContext.prototype.constructor = ReturnStmtContext;

ReturnStmtContext.prototype.RETURN = function() {
    return this.getToken(VerticalThings.RETURN, 0);
};

ReturnStmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ReturnStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterReturnStmt(this);
	}
};

ReturnStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitReturnStmt(this);
	}
};

ReturnStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitReturnStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.ReturnStmtContext = ReturnStmtContext;

VerticalThings.prototype.returnStmt = function() {

    var localctx = new ReturnStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, VerticalThings.RULE_returnStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 392;
        this.match(VerticalThings.RETURN);
        this.state = 393;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_stmt;
    return this;
}

StmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtContext.prototype.constructor = StmtContext;

StmtContext.prototype.stmtBlock = function() {
    return this.getTypedRuleContext(StmtBlockContext,0);
};

StmtContext.prototype.ifStmt = function() {
    return this.getTypedRuleContext(IfStmtContext,0);
};

StmtContext.prototype.forStmt = function() {
    return this.getTypedRuleContext(ForStmtContext,0);
};

StmtContext.prototype.whileStmt = function() {
    return this.getTypedRuleContext(WhileStmtContext,0);
};

StmtContext.prototype.assignStmt = function() {
    return this.getTypedRuleContext(AssignStmtContext,0);
};

StmtContext.prototype.SEMI = function() {
    return this.getToken(VerticalThings.SEMI, 0);
};

StmtContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

StmtContext.prototype.returnStmt = function() {
    return this.getTypedRuleContext(ReturnStmtContext,0);
};

StmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterStmt(this);
	}
};

StmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitStmt(this);
	}
};

StmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.StmtContext = StmtContext;

VerticalThings.prototype.stmt = function() {

    var localctx = new StmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, VerticalThings.RULE_stmt);
    try {
        this.state = 408;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 395;
            this.stmtBlock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 396;
            this.ifStmt();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 397;
            this.forStmt();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 398;
            this.whileStmt();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 399;
            this.assignStmt();
            this.state = 400;
            this.match(VerticalThings.SEMI);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 402;
            this.functionCall();
            this.state = 403;
            this.match(VerticalThings.SEMI);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 405;
            this.returnStmt();
            this.state = 406;
            this.match(VerticalThings.SEMI);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FuncDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_funcDef;
    return this;
}

FuncDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncDefContext.prototype.constructor = FuncDefContext;

FuncDefContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

FuncDefContext.prototype.LP = function() {
    return this.getToken(VerticalThings.LP, 0);
};

FuncDefContext.prototype.RP = function() {
    return this.getToken(VerticalThings.RP, 0);
};

FuncDefContext.prototype.LB = function() {
    return this.getToken(VerticalThings.LB, 0);
};

FuncDefContext.prototype.RB = function() {
    return this.getToken(VerticalThings.RB, 0);
};

FuncDefContext.prototype.varType = function() {
    return this.getTypedRuleContext(VarTypeContext,0);
};

FuncDefContext.prototype.flowType = function() {
    return this.getTypedRuleContext(FlowTypeContext,0);
};

FuncDefContext.prototype.formalParams = function() {
    return this.getTypedRuleContext(FormalParamsContext,0);
};

FuncDefContext.prototype.varDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarDefContext);
    } else {
        return this.getTypedRuleContext(VarDefContext,i);
    }
};

FuncDefContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

FuncDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterFuncDef(this);
	}
};

FuncDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitFuncDef(this);
	}
};

FuncDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitFuncDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.FuncDefContext = FuncDefContext;

VerticalThings.prototype.funcDef = function() {

    var localctx = new FuncDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, VerticalThings.RULE_funcDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 412;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
        if(la_===1) {
            this.state = 410;
            this.varType();

        } else if(la_===2) {
            this.state = 411;
            this.flowType();

        }
        this.state = 414;
        this.match(VerticalThings.Identifier);
        this.state = 415;
        this.match(VerticalThings.LP);
        this.state = 417;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VerticalThings.CONST) | (1 << VerticalThings.VOID) | (1 << VerticalThings.LS))) !== 0) || ((((_la - 55)) & ~0x1f) == 0 && ((1 << (_la - 55)) & ((1 << (VerticalThings.INT - 55)) | (1 << (VerticalThings.FLOAT - 55)) | (1 << (VerticalThings.BOOLEAN - 55)) | (1 << (VerticalThings.Identifier - 55)))) !== 0)) {
            this.state = 416;
            this.formalParams();
        }

        this.state = 419;
        this.match(VerticalThings.RP);
        this.state = 420;
        this.match(VerticalThings.LB);
        this.state = 424;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,40,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 421;
                this.varDef(); 
            }
            this.state = 426;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,40,this._ctx);
        }

        this.state = 430;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VerticalThings.IF) | (1 << VerticalThings.FOR) | (1 << VerticalThings.WHILE) | (1 << VerticalThings.LB))) !== 0) || _la===VerticalThings.RETURN || _la===VerticalThings.Identifier) {
            this.state = 427;
            this.stmt();
            this.state = 432;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 433;
        this.match(VerticalThings.RB);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QualIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_qualIdentifier;
    return this;
}

QualIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QualIdentifierContext.prototype.constructor = QualIdentifierContext;

QualIdentifierContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.Identifier);
    } else {
        return this.getToken(VerticalThings.Identifier, i);
    }
};


QualIdentifierContext.prototype.PERIOD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.PERIOD);
    } else {
        return this.getToken(VerticalThings.PERIOD, i);
    }
};


QualIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterQualIdentifier(this);
	}
};

QualIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitQualIdentifier(this);
	}
};

QualIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitQualIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.QualIdentifierContext = QualIdentifierContext;

VerticalThings.prototype.qualIdentifier = function() {

    var localctx = new QualIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, VerticalThings.RULE_qualIdentifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 435;
        this.match(VerticalThings.Identifier);
        this.state = 440;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,42,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 436;
                this.match(VerticalThings.PERIOD);
                this.state = 437;
                this.match(VerticalThings.Identifier); 
            }
            this.state = 442;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,42,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CppQualIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_cppQualIdentifier;
    return this;
}

CppQualIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CppQualIdentifierContext.prototype.constructor = CppQualIdentifierContext;

CppQualIdentifierContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.Identifier);
    } else {
        return this.getToken(VerticalThings.Identifier, i);
    }
};


CppQualIdentifierContext.prototype.DCOLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.DCOLON);
    } else {
        return this.getToken(VerticalThings.DCOLON, i);
    }
};


CppQualIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterCppQualIdentifier(this);
	}
};

CppQualIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitCppQualIdentifier(this);
	}
};

CppQualIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitCppQualIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.CppQualIdentifierContext = CppQualIdentifierContext;

VerticalThings.prototype.cppQualIdentifier = function() {

    var localctx = new CppQualIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, VerticalThings.RULE_cppQualIdentifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 443;
        this.match(VerticalThings.Identifier);
        this.state = 446; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 444;
            this.match(VerticalThings.DCOLON);
            this.state = 445;
            this.match(VerticalThings.Identifier);
            this.state = 448; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===VerticalThings.DCOLON);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_functionCall;
    return this;
}

FunctionCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallContext.prototype.constructor = FunctionCallContext;

FunctionCallContext.prototype.LP = function() {
    return this.getToken(VerticalThings.LP, 0);
};

FunctionCallContext.prototype.RP = function() {
    return this.getToken(VerticalThings.RP, 0);
};

FunctionCallContext.prototype.qualIdentifier = function() {
    return this.getTypedRuleContext(QualIdentifierContext,0);
};

FunctionCallContext.prototype.cppQualIdentifier = function() {
    return this.getTypedRuleContext(CppQualIdentifierContext,0);
};

FunctionCallContext.prototype.actualParams = function() {
    return this.getTypedRuleContext(ActualParamsContext,0);
};

FunctionCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterFunctionCall(this);
	}
};

FunctionCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitFunctionCall(this);
	}
};

FunctionCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitFunctionCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.FunctionCallContext = FunctionCallContext;

VerticalThings.prototype.functionCall = function() {

    var localctx = new FunctionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, VerticalThings.RULE_functionCall);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 452;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
        switch(la_) {
        case 1:
            this.state = 450;
            this.qualIdentifier();
            break;

        case 2:
            this.state = 451;
            this.cppQualIdentifier();
            break;

        }
        this.state = 454;
        this.match(VerticalThings.LP);
        this.state = 456;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VerticalThings.TRUE) | (1 << VerticalThings.FALSE) | (1 << VerticalThings.LP) | (1 << VerticalThings.MINUS))) !== 0) || ((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (VerticalThings.LNOT - 45)) | (1 << (VerticalThings.BNOT - 45)) | (1 << (VerticalThings.ADDRESSOF - 45)) | (1 << (VerticalThings.INT - 45)) | (1 << (VerticalThings.FLOAT - 45)) | (1 << (VerticalThings.BOOLEAN - 45)) | (1 << (VerticalThings.Identifier - 45)) | (1 << (VerticalThings.IntegerConstant - 45)) | (1 << (VerticalThings.FloatingConstant - 45)) | (1 << (VerticalThings.CharacterConstant - 45)) | (1 << (VerticalThings.StringLiteral - 45)))) !== 0)) {
            this.state = 455;
            this.actualParams();
        }

        this.state = 458;
        this.match(VerticalThings.RP);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ActualParamContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_actualParam;
    return this;
}

ActualParamContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ActualParamContext.prototype.constructor = ActualParamContext;

ActualParamContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ActualParamContext.prototype.StringLiteral = function() {
    return this.getToken(VerticalThings.StringLiteral, 0);
};

ActualParamContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

ActualParamContext.prototype.ASSIGN = function() {
    return this.getToken(VerticalThings.ASSIGN, 0);
};

ActualParamContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterActualParam(this);
	}
};

ActualParamContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitActualParam(this);
	}
};

ActualParamContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitActualParam(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.ActualParamContext = ActualParamContext;

VerticalThings.prototype.actualParam = function() {

    var localctx = new ActualParamContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, VerticalThings.RULE_actualParam);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 462;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
        if(la_===1) {
            this.state = 460;
            this.match(VerticalThings.Identifier);
            this.state = 461;
            this.match(VerticalThings.ASSIGN);

        }
        this.state = 466;
        switch(this._input.LA(1)) {
        case VerticalThings.TRUE:
        case VerticalThings.FALSE:
        case VerticalThings.LP:
        case VerticalThings.MINUS:
        case VerticalThings.LNOT:
        case VerticalThings.BNOT:
        case VerticalThings.ADDRESSOF:
        case VerticalThings.INT:
        case VerticalThings.FLOAT:
        case VerticalThings.BOOLEAN:
        case VerticalThings.Identifier:
        case VerticalThings.IntegerConstant:
        case VerticalThings.FloatingConstant:
        case VerticalThings.CharacterConstant:
            this.state = 464;
            this.expr(0);
            break;
        case VerticalThings.StringLiteral:
            this.state = 465;
            this.match(VerticalThings.StringLiteral);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ActualParamsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_actualParams;
    return this;
}

ActualParamsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ActualParamsContext.prototype.constructor = ActualParamsContext;

ActualParamsContext.prototype.actualParam = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ActualParamContext);
    } else {
        return this.getTypedRuleContext(ActualParamContext,i);
    }
};

ActualParamsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.COMMA);
    } else {
        return this.getToken(VerticalThings.COMMA, i);
    }
};


ActualParamsContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterActualParams(this);
	}
};

ActualParamsContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitActualParams(this);
	}
};

ActualParamsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitActualParams(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.ActualParamsContext = ActualParamsContext;

VerticalThings.prototype.actualParams = function() {

    var localctx = new ActualParamsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, VerticalThings.RULE_actualParams);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 468;
        this.actualParam();
        this.state = 473;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,48,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 469;
                this.match(VerticalThings.COMMA);
                this.state = 470;
                this.actualParam(); 
            }
            this.state = 475;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,48,this._ctx);
        }

        this.state = 477;
        _la = this._input.LA(1);
        if(_la===VerticalThings.COMMA) {
            this.state = 476;
            this.match(VerticalThings.COMMA);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrayExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_arrayExpr;
    return this;
}

ArrayExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayExprContext.prototype.constructor = ArrayExprContext;

ArrayExprContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

ArrayExprContext.prototype.dimensionSpec = function() {
    return this.getTypedRuleContext(DimensionSpecContext,0);
};

ArrayExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterArrayExpr(this);
	}
};

ArrayExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitArrayExpr(this);
	}
};

ArrayExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitArrayExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.ArrayExprContext = ArrayExprContext;

VerticalThings.prototype.arrayExpr = function() {

    var localctx = new ArrayExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, VerticalThings.RULE_arrayExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 479;
        this.match(VerticalThings.Identifier);
        this.state = 480;
        this.dimensionSpec();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AddressExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_addressExpr;
    return this;
}

AddressExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddressExprContext.prototype.constructor = AddressExprContext;

AddressExprContext.prototype.ADDRESSOF = function() {
    return this.getToken(VerticalThings.ADDRESSOF, 0);
};

AddressExprContext.prototype.arrayExpr = function() {
    return this.getTypedRuleContext(ArrayExprContext,0);
};

AddressExprContext.prototype.qualIdentifier = function() {
    return this.getTypedRuleContext(QualIdentifierContext,0);
};

AddressExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterAddressExpr(this);
	}
};

AddressExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitAddressExpr(this);
	}
};

AddressExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitAddressExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.AddressExprContext = AddressExprContext;

VerticalThings.prototype.addressExpr = function() {

    var localctx = new AddressExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, VerticalThings.RULE_addressExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 482;
        this.match(VerticalThings.ADDRESSOF);
        this.state = 485;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
        switch(la_) {
        case 1:
            this.state = 483;
            this.arrayExpr();
            break;

        case 2:
            this.state = 484;
            this.qualIdentifier();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CastExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_castExpr;
    return this;
}

CastExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CastExprContext.prototype.constructor = CastExprContext;

CastExprContext.prototype.castableType = function() {
    return this.getTypedRuleContext(CastableTypeContext,0);
};

CastExprContext.prototype.LP = function() {
    return this.getToken(VerticalThings.LP, 0);
};

CastExprContext.prototype.basicExpr = function() {
    return this.getTypedRuleContext(BasicExprContext,0);
};

CastExprContext.prototype.RP = function() {
    return this.getToken(VerticalThings.RP, 0);
};

CastExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterCastExpr(this);
	}
};

CastExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitCastExpr(this);
	}
};

CastExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitCastExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.CastExprContext = CastExprContext;

VerticalThings.prototype.castExpr = function() {

    var localctx = new CastExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, VerticalThings.RULE_castExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 487;
        this.castableType();
        this.state = 488;
        this.match(VerticalThings.LP);
        this.state = 489;
        this.basicExpr(0);
        this.state = 490;
        this.match(VerticalThings.RP);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BasicExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_basicExpr;
    this.up = null; // Token
    this.op = null; // Token
    return this;
}

BasicExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BasicExprContext.prototype.constructor = BasicExprContext;

BasicExprContext.prototype.basicExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BasicExprContext);
    } else {
        return this.getTypedRuleContext(BasicExprContext,i);
    }
};

BasicExprContext.prototype.BNOT = function() {
    return this.getToken(VerticalThings.BNOT, 0);
};

BasicExprContext.prototype.MINUS = function() {
    return this.getToken(VerticalThings.MINUS, 0);
};

BasicExprContext.prototype.castExpr = function() {
    return this.getTypedRuleContext(CastExprContext,0);
};

BasicExprContext.prototype.qualIdentifier = function() {
    return this.getTypedRuleContext(QualIdentifierContext,0);
};

BasicExprContext.prototype.arrayExpr = function() {
    return this.getTypedRuleContext(ArrayExprContext,0);
};

BasicExprContext.prototype.addressExpr = function() {
    return this.getTypedRuleContext(AddressExprContext,0);
};

BasicExprContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

BasicExprContext.prototype.exprConstant = function() {
    return this.getTypedRuleContext(ExprConstantContext,0);
};

BasicExprContext.prototype.LP = function() {
    return this.getToken(VerticalThings.LP, 0);
};

BasicExprContext.prototype.RP = function() {
    return this.getToken(VerticalThings.RP, 0);
};

BasicExprContext.prototype.POW = function() {
    return this.getToken(VerticalThings.POW, 0);
};

BasicExprContext.prototype.BAND = function() {
    return this.getToken(VerticalThings.BAND, 0);
};

BasicExprContext.prototype.BOR = function() {
    return this.getToken(VerticalThings.BOR, 0);
};

BasicExprContext.prototype.BXOR = function() {
    return this.getToken(VerticalThings.BXOR, 0);
};

BasicExprContext.prototype.LSHIFT = function() {
    return this.getToken(VerticalThings.LSHIFT, 0);
};

BasicExprContext.prototype.RSHIFT = function() {
    return this.getToken(VerticalThings.RSHIFT, 0);
};

BasicExprContext.prototype.CAT = function() {
    return this.getToken(VerticalThings.CAT, 0);
};

BasicExprContext.prototype.HPROD = function() {
    return this.getToken(VerticalThings.HPROD, 0);
};

BasicExprContext.prototype.MUL = function() {
    return this.getToken(VerticalThings.MUL, 0);
};

BasicExprContext.prototype.DIV = function() {
    return this.getToken(VerticalThings.DIV, 0);
};

BasicExprContext.prototype.MOD = function() {
    return this.getToken(VerticalThings.MOD, 0);
};

BasicExprContext.prototype.PLUS = function() {
    return this.getToken(VerticalThings.PLUS, 0);
};

BasicExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterBasicExpr(this);
	}
};

BasicExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitBasicExpr(this);
	}
};

BasicExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitBasicExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



VerticalThings.prototype.basicExpr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new BasicExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 98;
    this.enterRecursionRule(localctx, 98, VerticalThings.RULE_basicExpr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 505;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
        switch(la_) {
        case 1:
            this.state = 493;
            localctx.up = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===VerticalThings.MINUS || _la===VerticalThings.BNOT)) {
                localctx.up = this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 494;
            this.basicExpr(7);
            break;

        case 2:
            this.state = 495;
            this.castExpr();
            break;

        case 3:
            this.state = 496;
            this.qualIdentifier();
            break;

        case 4:
            this.state = 497;
            this.arrayExpr();
            break;

        case 5:
            this.state = 498;
            this.addressExpr();
            break;

        case 6:
            this.state = 499;
            this.functionCall();
            break;

        case 7:
            this.state = 500;
            this.exprConstant();
            break;

        case 8:
            this.state = 501;
            this.match(VerticalThings.LP);
            this.state = 502;
            this.basicExpr(0);
            this.state = 503;
            this.match(VerticalThings.RP);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 527;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,53,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 525;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,52,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 507;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 508;
                    localctx.op = this.match(VerticalThings.POW);
                    this.state = 509;
                    this.basicExpr(15);
                    break;

                case 2:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 510;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 511;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 48)) & ~0x1f) == 0 && ((1 << (_la - 48)) & ((1 << (VerticalThings.BAND - 48)) | (1 << (VerticalThings.BOR - 48)) | (1 << (VerticalThings.BXOR - 48)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 512;
                    this.basicExpr(7);
                    break;

                case 3:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 513;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 514;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===VerticalThings.LSHIFT || _la===VerticalThings.RSHIFT)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 515;
                    this.basicExpr(6);
                    break;

                case 4:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 516;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 517;
                    localctx.op = this.match(VerticalThings.CAT);
                    this.state = 518;
                    this.basicExpr(5);
                    break;

                case 5:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 519;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 520;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 30)) & ~0x1f) == 0 && ((1 << (_la - 30)) & ((1 << (VerticalThings.MUL - 30)) | (1 << (VerticalThings.DIV - 30)) | (1 << (VerticalThings.MOD - 30)) | (1 << (VerticalThings.HPROD - 30)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 521;
                    this.basicExpr(4);
                    break;

                case 6:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 522;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 523;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===VerticalThings.PLUS || _la===VerticalThings.MINUS)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 524;
                    this.basicExpr(3);
                    break;

                } 
            }
            this.state = 529;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,53,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function RelExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_relExpr;
    this.op = null; // Token
    return this;
}

RelExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelExprContext.prototype.constructor = RelExprContext;

RelExprContext.prototype.basicExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BasicExprContext);
    } else {
        return this.getTypedRuleContext(BasicExprContext,i);
    }
};

RelExprContext.prototype.GT = function() {
    return this.getToken(VerticalThings.GT, 0);
};

RelExprContext.prototype.GTE = function() {
    return this.getToken(VerticalThings.GTE, 0);
};

RelExprContext.prototype.LT = function() {
    return this.getToken(VerticalThings.LT, 0);
};

RelExprContext.prototype.LTE = function() {
    return this.getToken(VerticalThings.LTE, 0);
};

RelExprContext.prototype.EQ = function() {
    return this.getToken(VerticalThings.EQ, 0);
};

RelExprContext.prototype.NEQ = function() {
    return this.getToken(VerticalThings.NEQ, 0);
};

RelExprContext.prototype.LP = function() {
    return this.getToken(VerticalThings.LP, 0);
};

RelExprContext.prototype.relExpr = function() {
    return this.getTypedRuleContext(RelExprContext,0);
};

RelExprContext.prototype.RP = function() {
    return this.getToken(VerticalThings.RP, 0);
};

RelExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterRelExpr(this);
	}
};

RelExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitRelExpr(this);
	}
};

RelExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitRelExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.RelExprContext = RelExprContext;

VerticalThings.prototype.relExpr = function() {

    var localctx = new RelExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, VerticalThings.RULE_relExpr);
    var _la = 0; // Token type
    try {
        this.state = 538;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 530;
            this.basicExpr(0);
            this.state = 531;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (VerticalThings.LT - 36)) | (1 << (VerticalThings.GT - 36)) | (1 << (VerticalThings.LTE - 36)) | (1 << (VerticalThings.GTE - 36)) | (1 << (VerticalThings.EQ - 36)) | (1 << (VerticalThings.NEQ - 36)))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 532;
            this.basicExpr(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 534;
            this.match(VerticalThings.LP);
            this.state = 535;
            this.relExpr();
            this.state = 536;
            this.match(VerticalThings.RP);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_expr;
    this.op = null; // Token
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.LNOT = function() {
    return this.getToken(VerticalThings.LNOT, 0);
};

ExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprContext.prototype.basicExpr = function() {
    return this.getTypedRuleContext(BasicExprContext,0);
};

ExprContext.prototype.relExpr = function() {
    return this.getTypedRuleContext(RelExprContext,0);
};

ExprContext.prototype.LP = function() {
    return this.getToken(VerticalThings.LP, 0);
};

ExprContext.prototype.RP = function() {
    return this.getToken(VerticalThings.RP, 0);
};

ExprContext.prototype.LOR = function() {
    return this.getToken(VerticalThings.LOR, 0);
};

ExprContext.prototype.LAND = function() {
    return this.getToken(VerticalThings.LAND, 0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitExpr(this);
	}
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



VerticalThings.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 102;
    this.enterRecursionRule(localctx, 102, VerticalThings.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 549;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,55,this._ctx);
        switch(la_) {
        case 1:
            this.state = 541;
            this.match(VerticalThings.LNOT);
            this.state = 542;
            this.expr(5);
            break;

        case 2:
            this.state = 543;
            this.basicExpr(0);
            break;

        case 3:
            this.state = 544;
            this.relExpr();
            break;

        case 4:
            this.state = 545;
            this.match(VerticalThings.LP);
            this.state = 546;
            this.expr(0);
            this.state = 547;
            this.match(VerticalThings.RP);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 556;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,56,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ExprContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_expr);
                this.state = 551;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 552;
                localctx.op = this._input.LT(1);
                _la = this._input.LA(1);
                if(!(_la===VerticalThings.LAND || _la===VerticalThings.LOR)) {
                    localctx.op = this._errHandler.recoverInline(this);
                }
                else {
                    this.consume();
                }
                this.state = 553;
                this.expr(3); 
            }
            this.state = 558;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,56,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function NumConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_numConstant;
    return this;
}

NumConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumConstantContext.prototype.constructor = NumConstantContext;

NumConstantContext.prototype.IntegerConstant = function() {
    return this.getToken(VerticalThings.IntegerConstant, 0);
};

NumConstantContext.prototype.FloatingConstant = function() {
    return this.getToken(VerticalThings.FloatingConstant, 0);
};

NumConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterNumConstant(this);
	}
};

NumConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitNumConstant(this);
	}
};

NumConstantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitNumConstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.NumConstantContext = NumConstantContext;

VerticalThings.prototype.numConstant = function() {

    var localctx = new NumConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, VerticalThings.RULE_numConstant);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 559;
        _la = this._input.LA(1);
        if(!(_la===VerticalThings.IntegerConstant || _la===VerticalThings.FloatingConstant)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_exprConstant;
    return this;
}

ExprConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprConstantContext.prototype.constructor = ExprConstantContext;

ExprConstantContext.prototype.numConstant = function() {
    return this.getTypedRuleContext(NumConstantContext,0);
};

ExprConstantContext.prototype.CharacterConstant = function() {
    return this.getToken(VerticalThings.CharacterConstant, 0);
};

ExprConstantContext.prototype.booleanLiteral = function() {
    return this.getTypedRuleContext(BooleanLiteralContext,0);
};

ExprConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterExprConstant(this);
	}
};

ExprConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitExprConstant(this);
	}
};

ExprConstantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitExprConstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.ExprConstantContext = ExprConstantContext;

VerticalThings.prototype.exprConstant = function() {

    var localctx = new ExprConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, VerticalThings.RULE_exprConstant);
    try {
        this.state = 564;
        switch(this._input.LA(1)) {
        case VerticalThings.IntegerConstant:
        case VerticalThings.FloatingConstant:
            this.enterOuterAlt(localctx, 1);
            this.state = 561;
            this.numConstant();
            break;
        case VerticalThings.CharacterConstant:
            this.enterOuterAlt(localctx, 2);
            this.state = 562;
            this.match(VerticalThings.CharacterConstant);
            break;
        case VerticalThings.TRUE:
        case VerticalThings.FALSE:
            this.enterOuterAlt(localctx, 3);
            this.state = 563;
            this.booleanLiteral();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.exprConstant = function() {
    return this.getTypedRuleContext(ExprConstantContext,0);
};

LiteralContext.prototype.arrayLiteral = function() {
    return this.getTypedRuleContext(ArrayLiteralContext,0);
};

LiteralContext.prototype.StringLiteral = function() {
    return this.getToken(VerticalThings.StringLiteral, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitLiteral(this);
	}
};

LiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.LiteralContext = LiteralContext;

VerticalThings.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, VerticalThings.RULE_literal);
    try {
        this.state = 569;
        switch(this._input.LA(1)) {
        case VerticalThings.TRUE:
        case VerticalThings.FALSE:
        case VerticalThings.IntegerConstant:
        case VerticalThings.FloatingConstant:
        case VerticalThings.CharacterConstant:
            this.enterOuterAlt(localctx, 1);
            this.state = 566;
            this.exprConstant();
            break;
        case VerticalThings.LB:
            this.enterOuterAlt(localctx, 2);
            this.state = 567;
            this.arrayLiteral();
            break;
        case VerticalThings.StringLiteral:
            this.enterOuterAlt(localctx, 3);
            this.state = 568;
            this.match(VerticalThings.StringLiteral);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


VerticalThings.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 49:
			return this.basicExpr_sempred(localctx, predIndex);
	case 51:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

VerticalThings.prototype.basicExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 14);
		case 1:
			return this.precpred(this._ctx, 6);
		case 2:
			return this.precpred(this._ctx, 5);
		case 3:
			return this.precpred(this._ctx, 4);
		case 4:
			return this.precpred(this._ctx, 3);
		case 5:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

VerticalThings.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 6:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.VerticalThings = VerticalThings;
