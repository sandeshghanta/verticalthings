// Generated from VerticalThings.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var VerticalThingsListener = require('./VerticalThingsListener').VerticalThingsListener;
var VerticalThingsVisitor = require('./VerticalThingsVisitor').VerticalThingsVisitor;

var grammarFileName = "VerticalThings.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003A\u01d6\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002[\n\u0002\f\u0002",
    "\u000e\u0002^\u000b\u0002\u0003\u0002\u0007\u0002a\n\u0002\f\u0002\u000e",
    "\u0002d\u000b\u0002\u0003\u0002\u0007\u0002g\n\u0002\f\u0002\u000e\u0002",
    "j\u000b\u0002\u0003\u0002\u0005\u0002m\n\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003s\n\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "|\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006\u0081\n\u0006",
    "\f\u0006\u000e\u0006\u0084\u000b\u0006\u0003\u0006\u0005\u0006\u0087",
    "\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u0093\n\t\f\t\u000e\t\u0096",
    "\u000b\t\u0005\t\u0098\n\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0005",
    "\n\u009f\n\n\u0003\u000b\u0005\u000b\u00a2\n\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0005\u000b\u00a7\n\u000b\u0003\u000b\u0003\u000b",
    "\u0005\u000b\u00ab\n\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\r\u0005\r\u00b6\n\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0006\u000e\u00bc\n\u000e\r\u000e\u000e",
    "\u000e\u00bd\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0005\u0010",
    "\u00c4\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0005\u0013\u00d2\n\u0013\u0003\u0014\u0005\u0014",
    "\u00d5\n\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0005\u0015\u00da",
    "\n\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0007\u0016\u00e2\n\u0016\f\u0016\u000e\u0016\u00e5\u000b",
    "\u0016\u0003\u0017\u0003\u0017\u0007\u0017\u00e9\n\u0017\f\u0017\u000e",
    "\u0017\u00ec\u000b\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0005\u0018\u00f3\n\u0018\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u00fb\n\u0019",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0007\u001a\u0100\n\u001a\f\u001a",
    "\u000e\u001a\u0103\u000b\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0005\u001d\u0113",
    "\n\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0005\u001e\u0122\n\u001e\u0003\u001f\u0003",
    "\u001f\u0005\u001f\u0126\n\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0005\u001f\u012b\n\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    " \u0003 \u0003 \u0007 \u0133\n \f \u000e \u0136\u000b \u0003!\u0003",
    "!\u0003!\u0006!\u013b\n!\r!\u000e!\u013c\u0003\"\u0003\"\u0005\"\u0141",
    "\n\"\u0003\"\u0003\"\u0005\"\u0145\n\"\u0003\"\u0003\"\u0003#\u0003",
    "#\u0005#\u014b\n#\u0003$\u0003$\u0003$\u0007$\u0150\n$\f$\u000e$\u0153",
    "\u000b$\u0003$\u0005$\u0156\n$\u0003%\u0003%\u0003%\u0003&\u0003&\u0003",
    "&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003",
    "&\u0005&\u0168\n&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003",
    "&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003",
    "&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003",
    "&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003",
    "&\u0003&\u0007&\u0191\n&\f&\u000e&\u0194\u000b&\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0005\'\u01b2",
    "\n\'\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(",
    "\u0005(\u01bd\n(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0007(\u01c5",
    "\n(\f(\u000e(\u01c8\u000b(\u0003)\u0003)\u0003*\u0003*\u0003*\u0005",
    "*\u01cf\n*\u0003+\u0003+\u0003+\u0005+\u01d4\n+\u0003+\u0002\u0004J",
    "N,\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRT\u0002\b\u0003\u0002\u0010\u0011",
    "\u0004\u0002\u001d\u001d\u001f\u001f\u0003\u000289\u0003\u0002\u0019",
    "\u001a\u0004\u0002\u000e\u000e57\u0003\u00029:\u01fb\u0002V\u0003\u0002",
    "\u0002\u0002\u0004n\u0003\u0002\u0002\u0002\u0006t\u0003\u0002\u0002",
    "\u0002\b{\u0003\u0002\u0002\u0002\n}\u0003\u0002\u0002\u0002\f\u0088",
    "\u0003\u0002\u0002\u0002\u000e\u008c\u0003\u0002\u0002\u0002\u0010\u008e",
    "\u0003\u0002\u0002\u0002\u0012\u009e\u0003\u0002\u0002\u0002\u0014\u00a1",
    "\u0003\u0002\u0002\u0002\u0016\u00ae\u0003\u0002\u0002\u0002\u0018\u00b5",
    "\u0003\u0002\u0002\u0002\u001a\u00bb\u0003\u0002\u0002\u0002\u001c\u00bf",
    "\u0003\u0002\u0002\u0002\u001e\u00c3\u0003\u0002\u0002\u0002 \u00c5",
    "\u0003\u0002\u0002\u0002\"\u00cb\u0003\u0002\u0002\u0002$\u00d1\u0003",
    "\u0002\u0002\u0002&\u00d4\u0003\u0002\u0002\u0002(\u00d9\u0003\u0002",
    "\u0002\u0002*\u00de\u0003\u0002\u0002\u0002,\u00e6\u0003\u0002\u0002",
    "\u0002.\u00ef\u0003\u0002\u0002\u00020\u00f4\u0003\u0002\u0002\u0002",
    "2\u00fc\u0003\u0002\u0002\u00024\u0104\u0003\u0002\u0002\u00026\u010a",
    "\u0003\u0002\u0002\u00028\u0110\u0003\u0002\u0002\u0002:\u0121\u0003",
    "\u0002\u0002\u0002<\u0125\u0003\u0002\u0002\u0002>\u012f\u0003\u0002",
    "\u0002\u0002@\u0137\u0003\u0002\u0002\u0002B\u0140\u0003\u0002\u0002",
    "\u0002D\u014a\u0003\u0002\u0002\u0002F\u014c\u0003\u0002\u0002\u0002",
    "H\u0157\u0003\u0002\u0002\u0002J\u0167\u0003\u0002\u0002\u0002L\u01b1",
    "\u0003\u0002\u0002\u0002N\u01bc\u0003\u0002\u0002\u0002P\u01c9\u0003",
    "\u0002\u0002\u0002R\u01ce\u0003\u0002\u0002\u0002T\u01d3\u0003\u0002",
    "\u0002\u0002VW\u0007\u0003\u0002\u0002WX\u00078\u0002\u0002X\\\u0007",
    "\u0012\u0002\u0002Y[\u0005\f\u0007\u0002ZY\u0003\u0002\u0002\u0002[",
    "^\u0003\u0002\u0002\u0002\\Z\u0003\u0002\u0002\u0002\\]\u0003\u0002",
    "\u0002\u0002]b\u0003\u0002\u0002\u0002^\\\u0003\u0002\u0002\u0002_a",
    "\u0005\u0014\u000b\u0002`_\u0003\u0002\u0002\u0002ad\u0003\u0002\u0002",
    "\u0002b`\u0003\u0002\u0002\u0002bc\u0003\u0002\u0002\u0002cl\u0003\u0002",
    "\u0002\u0002db\u0003\u0002\u0002\u0002eg\u0005<\u001f\u0002fe\u0003",
    "\u0002\u0002\u0002gj\u0003\u0002\u0002\u0002hf\u0003\u0002\u0002\u0002",
    "hi\u0003\u0002\u0002\u0002im\u0003\u0002\u0002\u0002jh\u0003\u0002\u0002",
    "\u0002km\u0005\u0004\u0003\u0002lh\u0003\u0002\u0002\u0002lk\u0003\u0002",
    "\u0002\u0002m\u0003\u0003\u0002\u0002\u0002no\u0007\u0004\u0002\u0002",
    "op\u00078\u0002\u0002pr\u0005\u0006\u0004\u0002qs\u0007\u0012\u0002",
    "\u0002rq\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002s\u0005\u0003",
    "\u0002\u0002\u0002tu\u0007\u0015\u0002\u0002uv\u0005\n\u0006\u0002v",
    "w\u0007\u0016\u0002\u0002w\u0007\u0003\u0002\u0002\u0002x|\u0005> \u0002",
    "y|\u0005B\"\u0002z|\u0005\u0006\u0004\u0002{x\u0003\u0002\u0002\u0002",
    "{y\u0003\u0002\u0002\u0002{z\u0003\u0002\u0002\u0002|\t\u0003\u0002",
    "\u0002\u0002}\u0082\u0005\b\u0005\u0002~\u007f\u0007\u001a\u0002\u0002",
    "\u007f\u0081\u0005\b\u0005\u0002\u0080~\u0003\u0002\u0002\u0002\u0081",
    "\u0084\u0003\u0002\u0002\u0002\u0082\u0080\u0003\u0002\u0002\u0002\u0082",
    "\u0083\u0003\u0002\u0002\u0002\u0083\u0086\u0003\u0002\u0002\u0002\u0084",
    "\u0082\u0003\u0002\u0002\u0002\u0085\u0087\u0007\u001a\u0002\u0002\u0086",
    "\u0085\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087",
    "\u000b\u0003\u0002\u0002\u0002\u0088\u0089\u0007\u0006\u0002\u0002\u0089",
    "\u008a\u00078\u0002\u0002\u008a\u008b\u0007\u0012\u0002\u0002\u008b",
    "\r\u0003\u0002\u0002\u0002\u008c\u008d\t\u0002\u0002\u0002\u008d\u000f",
    "\u0003\u0002\u0002\u0002\u008e\u0097\u0007\u0015\u0002\u0002\u008f\u0094",
    "\u0005T+\u0002\u0090\u0091\u0007\u001a\u0002\u0002\u0091\u0093\u0005",
    "T+\u0002\u0092\u0090\u0003\u0002\u0002\u0002\u0093\u0096\u0003\u0002",
    "\u0002\u0002\u0094\u0092\u0003\u0002\u0002\u0002\u0094\u0095\u0003\u0002",
    "\u0002\u0002\u0095\u0098\u0003\u0002\u0002\u0002\u0096\u0094\u0003\u0002",
    "\u0002\u0002\u0097\u008f\u0003\u0002\u0002\u0002\u0097\u0098\u0003\u0002",
    "\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u009a\u0007\u0016",
    "\u0002\u0002\u009a\u0011\u0003\u0002\u0002\u0002\u009b\u009f\u0005N",
    "(\u0002\u009c\u009f\u0007=\u0002\u0002\u009d\u009f\u0005\u0010\t\u0002",
    "\u009e\u009b\u0003\u0002\u0002\u0002\u009e\u009c\u0003\u0002\u0002\u0002",
    "\u009e\u009d\u0003\u0002\u0002\u0002\u009f\u0013\u0003\u0002\u0002\u0002",
    "\u00a0\u00a2\u0007\t\u0002\u0002\u00a1\u00a0\u0003\u0002\u0002\u0002",
    "\u00a1\u00a2\u0003\u0002\u0002\u0002\u00a2\u00a3\u0003\u0002\u0002\u0002",
    "\u00a3\u00a4\u0005$\u0013\u0002\u00a4\u00a6\u00078\u0002\u0002\u00a5",
    "\u00a7\u0005\u001a\u000e\u0002\u00a6\u00a5\u0003\u0002\u0002\u0002\u00a6",
    "\u00a7\u0003\u0002\u0002\u0002\u00a7\u00aa\u0003\u0002\u0002\u0002\u00a8",
    "\u00a9\u0007+\u0002\u0002\u00a9\u00ab\u0005\u0012\n\u0002\u00aa\u00a8",
    "\u0003\u0002\u0002\u0002\u00aa\u00ab\u0003\u0002\u0002\u0002\u00ab\u00ac",
    "\u0003\u0002\u0002\u0002\u00ac\u00ad\u0007\u0012\u0002\u0002\u00ad\u0015",
    "\u0003\u0002\u0002\u0002\u00ae\u00af\u0005\u001c\u000f\u0002\u00af\u00b0",
    "\t\u0003\u0002\u0002\u00b0\u00b1\u0005\u001c\u000f\u0002\u00b1\u0017",
    "\u0003\u0002\u0002\u0002\u00b2\u00b6\u00079\u0002\u0002\u00b3\u00b6",
    "\u00078\u0002\u0002\u00b4\u00b6\u0005\u0016\f\u0002\u00b5\u00b2\u0003",
    "\u0002\u0002\u0002\u00b5\u00b3\u0003\u0002\u0002\u0002\u00b5\u00b4\u0003",
    "\u0002\u0002\u0002\u00b6\u0019\u0003\u0002\u0002\u0002\u00b7\u00b8\u0007",
    "\u0017\u0002\u0002\u00b8\u00b9\u0005\u0018\r\u0002\u00b9\u00ba\u0007",
    "\u0018\u0002\u0002\u00ba\u00bc\u0003\u0002\u0002\u0002\u00bb\u00b7\u0003",
    "\u0002\u0002\u0002\u00bc\u00bd\u0003\u0002\u0002\u0002\u00bd\u00bb\u0003",
    "\u0002\u0002\u0002\u00bd\u00be\u0003\u0002\u0002\u0002\u00be\u001b\u0003",
    "\u0002\u0002\u0002\u00bf\u00c0\t\u0004\u0002\u0002\u00c0\u001d\u0003",
    "\u0002\u0002\u0002\u00c1\u00c4\u00078\u0002\u0002\u00c2\u00c4\u0005",
    "P)\u0002\u00c3\u00c1\u0003\u0002\u0002\u0002\u00c3\u00c2\u0003\u0002",
    "\u0002\u0002\u00c4\u001f\u0003\u0002\u0002\u0002\u00c5\u00c6\u0007\u0017",
    "\u0002\u0002\u00c6\u00c7\u0005\u001e\u0010\u0002\u00c7\u00c8\t\u0005",
    "\u0002\u0002\u00c8\u00c9\u0005\u001e\u0010\u0002\u00c9\u00ca\u0007\u0018",
    "\u0002\u0002\u00ca!\u0003\u0002\u0002\u0002\u00cb\u00cc\t\u0006\u0002",
    "\u0002\u00cc#\u0003\u0002\u0002\u0002\u00cd\u00d2\u0005> \u0002\u00ce",
    "\u00d2\u0005@!\u0002\u00cf\u00d2\u0005 \u0011\u0002\u00d0\u00d2\u0005",
    "\"\u0012\u0002\u00d1\u00cd\u0003\u0002\u0002\u0002\u00d1\u00ce\u0003",
    "\u0002\u0002\u0002\u00d1\u00cf\u0003\u0002\u0002\u0002\u00d1\u00d0\u0003",
    "\u0002\u0002\u0002\u00d2%\u0003\u0002\u0002\u0002\u00d3\u00d5\u0007",
    "\b\u0002\u0002\u00d4\u00d3\u0003\u0002\u0002\u0002\u00d4\u00d5\u0003",
    "\u0002\u0002\u0002\u00d5\u00d6\u0003\u0002\u0002\u0002\u00d6\u00d7\u0007",
    "\u0005\u0002\u0002\u00d7\'\u0003\u0002\u0002\u0002\u00d8\u00da\u0007",
    "\t\u0002\u0002\u00d9\u00d8\u0003\u0002\u0002\u0002\u00d9\u00da\u0003",
    "\u0002\u0002\u0002\u00da\u00db\u0003\u0002\u0002\u0002\u00db\u00dc\u0005",
    "$\u0013\u0002\u00dc\u00dd\u00078\u0002\u0002\u00dd)\u0003\u0002\u0002",
    "\u0002\u00de\u00e3\u0005(\u0015\u0002\u00df\u00e0\u0007\u001a\u0002",
    "\u0002\u00e0\u00e2\u0005(\u0015\u0002\u00e1\u00df\u0003\u0002\u0002",
    "\u0002\u00e2\u00e5\u0003\u0002\u0002\u0002\u00e3\u00e1\u0003\u0002\u0002",
    "\u0002\u00e3\u00e4\u0003\u0002\u0002\u0002\u00e4+\u0003\u0002\u0002",
    "\u0002\u00e5\u00e3\u0003\u0002\u0002\u0002\u00e6\u00ea\u0007\u0015\u0002",
    "\u0002\u00e7\u00e9\u0005:\u001e\u0002\u00e8\u00e7\u0003\u0002\u0002",
    "\u0002\u00e9\u00ec\u0003\u0002\u0002\u0002\u00ea\u00e8\u0003\u0002\u0002",
    "\u0002\u00ea\u00eb\u0003\u0002\u0002\u0002\u00eb\u00ed\u0003\u0002\u0002",
    "\u0002\u00ec\u00ea\u0003\u0002\u0002\u0002\u00ed\u00ee\u0007\u0016\u0002",
    "\u0002\u00ee-\u0003\u0002\u0002\u0002\u00ef\u00f2\u0007\u000b\u0002",
    "\u0002\u00f0\u00f3\u0005,\u0017\u0002\u00f1\u00f3\u00050\u0019\u0002",
    "\u00f2\u00f0\u0003\u0002\u0002\u0002\u00f2\u00f1\u0003\u0002\u0002\u0002",
    "\u00f3/\u0003\u0002\u0002\u0002\u00f4\u00f5\u0007\n\u0002\u0002\u00f5",
    "\u00f6\u0007\u0013\u0002\u0002\u00f6\u00f7\u0005N(\u0002\u00f7\u00f8",
    "\u0007\u0014\u0002\u0002\u00f8\u00fa\u0005,\u0017\u0002\u00f9\u00fb",
    "\u0005.\u0018\u0002\u00fa\u00f9\u0003\u0002\u0002\u0002\u00fa\u00fb",
    "\u0003\u0002\u0002\u0002\u00fb1\u0003\u0002\u0002\u0002\u00fc\u0101",
    "\u00078\u0002\u0002\u00fd\u00fe\u0007\u001a\u0002\u0002\u00fe\u0100",
    "\u00078\u0002\u0002\u00ff\u00fd\u0003\u0002\u0002\u0002\u0100\u0103",
    "\u0003\u0002\u0002\u0002\u0101\u00ff\u0003\u0002\u0002\u0002\u0101\u0102",
    "\u0003\u0002\u0002\u0002\u01023\u0003\u0002\u0002\u0002\u0103\u0101",
    "\u0003\u0002\u0002\u0002\u0104\u0105\u0007\f\u0002\u0002\u0105\u0106",
    "\u00052\u001a\u0002\u0106\u0107\u0007\r\u0002\u0002\u0107\u0108\u0005",
    " \u0011\u0002\u0108\u0109\u0005,\u0017\u0002\u01095\u0003\u0002\u0002",
    "\u0002\u010a\u010b\u0007\u000f\u0002\u0002\u010b\u010c\u0007\u0013\u0002",
    "\u0002\u010c\u010d\u0005N(\u0002\u010d\u010e\u0007\u0014\u0002\u0002",
    "\u010e\u010f\u0005,\u0017\u0002\u010f7\u0003\u0002\u0002\u0002\u0110",
    "\u0112\u0005> \u0002\u0111\u0113\u0005\u001a\u000e\u0002\u0112\u0111",
    "\u0003\u0002\u0002\u0002\u0112\u0113\u0003\u0002\u0002\u0002\u0113\u0114",
    "\u0003\u0002\u0002\u0002\u0114\u0115\u0007+\u0002\u0002\u0115\u0116",
    "\u0005N(\u0002\u01169\u0003\u0002\u0002\u0002\u0117\u0122\u0005,\u0017",
    "\u0002\u0118\u0122\u00050\u0019\u0002\u0119\u0122\u00054\u001b\u0002",
    "\u011a\u0122\u00056\u001c\u0002\u011b\u011c\u00058\u001d\u0002\u011c",
    "\u011d\u0007\u0012\u0002\u0002\u011d\u0122\u0003\u0002\u0002\u0002\u011e",
    "\u011f\u0005B\"\u0002\u011f\u0120\u0007\u0012\u0002\u0002\u0120\u0122",
    "\u0003\u0002\u0002\u0002\u0121\u0117\u0003\u0002\u0002\u0002\u0121\u0118",
    "\u0003\u0002\u0002\u0002\u0121\u0119\u0003\u0002\u0002\u0002\u0121\u011a",
    "\u0003\u0002\u0002\u0002\u0121\u011b\u0003\u0002\u0002\u0002\u0121\u011e",
    "\u0003\u0002\u0002\u0002\u0122;\u0003\u0002\u0002\u0002\u0123\u0126",
    "\u0005$\u0013\u0002\u0124\u0126\u0005&\u0014\u0002\u0125\u0123\u0003",
    "\u0002\u0002\u0002\u0125\u0124\u0003\u0002\u0002\u0002\u0125\u0126\u0003",
    "\u0002\u0002\u0002\u0126\u0127\u0003\u0002\u0002\u0002\u0127\u0128\u0007",
    "8\u0002\u0002\u0128\u012a\u0007\u0013\u0002\u0002\u0129\u012b\u0005",
    "*\u0016\u0002\u012a\u0129\u0003\u0002\u0002\u0002\u012a\u012b\u0003",
    "\u0002\u0002\u0002\u012b\u012c\u0003\u0002\u0002\u0002\u012c\u012d\u0007",
    "\u0014\u0002\u0002\u012d\u012e\u0005,\u0017\u0002\u012e=\u0003\u0002",
    "\u0002\u0002\u012f\u0134\u00078\u0002\u0002\u0130\u0131\u0007\u001c",
    "\u0002\u0002\u0131\u0133\u00078\u0002\u0002\u0132\u0130\u0003\u0002",
    "\u0002\u0002\u0133\u0136\u0003\u0002\u0002\u0002\u0134\u0132\u0003\u0002",
    "\u0002\u0002\u0134\u0135\u0003\u0002\u0002\u0002\u0135?\u0003\u0002",
    "\u0002\u0002\u0136\u0134\u0003\u0002\u0002\u0002\u0137\u013a\u00078",
    "\u0002\u0002\u0138\u0139\u0007\u001b\u0002\u0002\u0139\u013b\u00078",
    "\u0002\u0002\u013a\u0138\u0003\u0002\u0002\u0002\u013b\u013c\u0003\u0002",
    "\u0002\u0002\u013c\u013a\u0003\u0002\u0002\u0002\u013c\u013d\u0003\u0002",
    "\u0002\u0002\u013dA\u0003\u0002\u0002\u0002\u013e\u0141\u0005> \u0002",
    "\u013f\u0141\u0005@!\u0002\u0140\u013e\u0003\u0002\u0002\u0002\u0140",
    "\u013f\u0003\u0002\u0002\u0002\u0141\u0142\u0003\u0002\u0002\u0002\u0142",
    "\u0144\u0007\u0013\u0002\u0002\u0143\u0145\u0005F$\u0002\u0144\u0143",
    "\u0003\u0002\u0002\u0002\u0144\u0145\u0003\u0002\u0002\u0002\u0145\u0146",
    "\u0003\u0002\u0002\u0002\u0146\u0147\u0007\u0014\u0002\u0002\u0147C",
    "\u0003\u0002\u0002\u0002\u0148\u014b\u0005N(\u0002\u0149\u014b\u0007",
    "=\u0002\u0002\u014a\u0148\u0003\u0002\u0002\u0002\u014a\u0149\u0003",
    "\u0002\u0002\u0002\u014bE\u0003\u0002\u0002\u0002\u014c\u0151\u0005",
    "D#\u0002\u014d\u014e\u0007\u001a\u0002\u0002\u014e\u0150\u0005D#\u0002",
    "\u014f\u014d\u0003\u0002\u0002\u0002\u0150\u0153\u0003\u0002\u0002\u0002",
    "\u0151\u014f\u0003\u0002\u0002\u0002\u0151\u0152\u0003\u0002\u0002\u0002",
    "\u0152\u0155\u0003\u0002\u0002\u0002\u0153\u0151\u0003\u0002\u0002\u0002",
    "\u0154\u0156\u0007\u001a\u0002\u0002\u0155\u0154\u0003\u0002\u0002\u0002",
    "\u0155\u0156\u0003\u0002\u0002\u0002\u0156G\u0003\u0002\u0002\u0002",
    "\u0157\u0158\u00078\u0002\u0002\u0158\u0159\u0005\u001a\u000e\u0002",
    "\u0159I\u0003\u0002\u0002\u0002\u015a\u015b\b&\u0001\u0002\u015b\u015c",
    "\u00073\u0002\u0002\u015c\u0168\u0005J&\u0005\u015d\u015e\u0007\u001e",
    "\u0002\u0002\u015e\u0168\u0005J&\u0004\u015f\u0168\u0005> \u0002\u0160",
    "\u0168\u0005H%\u0002\u0161\u0168\u0005B\"\u0002\u0162\u0168\u0005R*",
    "\u0002\u0163\u0164\u0007\u0013\u0002\u0002\u0164\u0165\u0005J&\u0002",
    "\u0165\u0166\u0007\u0014\u0002\u0002\u0166\u0168\u0003\u0002\u0002\u0002",
    "\u0167\u015a\u0003\u0002\u0002\u0002\u0167\u015d\u0003\u0002\u0002\u0002",
    "\u0167\u015f\u0003\u0002\u0002\u0002\u0167\u0160\u0003\u0002\u0002\u0002",
    "\u0167\u0161\u0003\u0002\u0002\u0002\u0167\u0162\u0003\u0002\u0002\u0002",
    "\u0167\u0163\u0003\u0002\u0002\u0002\u0168\u0192\u0003\u0002\u0002\u0002",
    "\u0169\u016a\f\u0012\u0002\u0002\u016a\u016b\u0007\u001d\u0002\u0002",
    "\u016b\u0191\u0005J&\u0013\u016c\u016d\f\u0011\u0002\u0002\u016d\u016e",
    "\u0007\u001e\u0002\u0002\u016e\u0191\u0005J&\u0012\u016f\u0170\f\u0010",
    "\u0002\u0002\u0170\u0171\u0007\u001f\u0002\u0002\u0171\u0191\u0005J",
    "&\u0011\u0172\u0173\f\u000f\u0002\u0002\u0173\u0174\u0007 \u0002\u0002",
    "\u0174\u0191\u0005J&\u0010\u0175\u0176\f\u000e\u0002\u0002\u0176\u0177",
    "\u0007!\u0002\u0002\u0177\u0191\u0005J&\u000f\u0178\u0179\f\r\u0002",
    "\u0002\u0179\u017a\u0007\"\u0002\u0002\u017a\u0191\u0005J&\u000e\u017b",
    "\u017c\f\f\u0002\u0002\u017c\u017d\u0007/\u0002\u0002\u017d\u0191\u0005",
    "J&\r\u017e\u017f\f\u000b\u0002\u0002\u017f\u0180\u00070\u0002\u0002",
    "\u0180\u0191\u0005J&\f\u0181\u0182\f\n\u0002\u0002\u0182\u0183\u0007",
    "1\u0002\u0002\u0183\u0191\u0005J&\u000b\u0184\u0185\f\t\u0002\u0002",
    "\u0185\u0186\u00072\u0002\u0002\u0186\u0191\u0005J&\n\u0187\u0188\f",
    "\b\u0002\u0002\u0188\u0189\u00074\u0002\u0002\u0189\u0191\u0005J&\t",
    "\u018a\u018b\f\u0007\u0002\u0002\u018b\u018c\u0007#\u0002\u0002\u018c",
    "\u0191\u0005J&\b\u018d\u018e\f\u0006\u0002\u0002\u018e\u018f\u0007$",
    "\u0002\u0002\u018f\u0191\u0005J&\u0007\u0190\u0169\u0003\u0002\u0002",
    "\u0002\u0190\u016c\u0003\u0002\u0002\u0002\u0190\u016f\u0003\u0002\u0002",
    "\u0002\u0190\u0172\u0003\u0002\u0002\u0002\u0190\u0175\u0003\u0002\u0002",
    "\u0002\u0190\u0178\u0003\u0002\u0002\u0002\u0190\u017b\u0003\u0002\u0002",
    "\u0002\u0190\u017e\u0003\u0002\u0002\u0002\u0190\u0181\u0003\u0002\u0002",
    "\u0002\u0190\u0184\u0003\u0002\u0002\u0002\u0190\u0187\u0003\u0002\u0002",
    "\u0002\u0190\u018a\u0003\u0002\u0002\u0002\u0190\u018d\u0003\u0002\u0002",
    "\u0002\u0191\u0194\u0003\u0002\u0002\u0002\u0192\u0190\u0003\u0002\u0002",
    "\u0002\u0192\u0193\u0003\u0002\u0002\u0002\u0193K\u0003\u0002\u0002",
    "\u0002\u0194\u0192\u0003\u0002\u0002\u0002\u0195\u0196\u0005J&\u0002",
    "\u0196\u0197\u0007&\u0002\u0002\u0197\u0198\u0005J&\u0002\u0198\u01b2",
    "\u0003\u0002\u0002\u0002\u0199\u019a\u0005J&\u0002\u019a\u019b\u0007",
    "(\u0002\u0002\u019b\u019c\u0005J&\u0002\u019c\u01b2\u0003\u0002\u0002",
    "\u0002\u019d\u019e\u0005J&\u0002\u019e\u019f\u0007%\u0002\u0002\u019f",
    "\u01a0\u0005J&\u0002\u01a0\u01b2\u0003\u0002\u0002\u0002\u01a1\u01a2",
    "\u0005J&\u0002\u01a2\u01a3\u0007\'\u0002\u0002\u01a3\u01a4\u0005J&\u0002",
    "\u01a4\u01b2\u0003\u0002\u0002\u0002\u01a5\u01a6\u0005J&\u0002\u01a6",
    "\u01a7\u0007)\u0002\u0002\u01a7\u01a8\u0005J&\u0002\u01a8\u01b2\u0003",
    "\u0002\u0002\u0002\u01a9\u01aa\u0005J&\u0002\u01aa\u01ab\u0007*\u0002",
    "\u0002\u01ab\u01ac\u0005J&\u0002\u01ac\u01b2\u0003\u0002\u0002\u0002",
    "\u01ad\u01ae\u0007\u0013\u0002\u0002\u01ae\u01af\u0005L\'\u0002\u01af",
    "\u01b0\u0007\u0014\u0002\u0002\u01b0\u01b2\u0003\u0002\u0002\u0002\u01b1",
    "\u0195\u0003\u0002\u0002\u0002\u01b1\u0199\u0003\u0002\u0002\u0002\u01b1",
    "\u019d\u0003\u0002\u0002\u0002\u01b1\u01a1\u0003\u0002\u0002\u0002\u01b1",
    "\u01a5\u0003\u0002\u0002\u0002\u01b1\u01a9\u0003\u0002\u0002\u0002\u01b1",
    "\u01ad\u0003\u0002\u0002\u0002\u01b2M\u0003\u0002\u0002\u0002\u01b3",
    "\u01b4\b(\u0001\u0002\u01b4\u01b5\u0007.\u0002\u0002\u01b5\u01bd\u0005",
    "N(\u0003\u01b6\u01bd\u0005J&\u0002\u01b7\u01bd\u0005L\'\u0002\u01b8",
    "\u01b9\u0007\u0013\u0002\u0002\u01b9\u01ba\u0005N(\u0002\u01ba\u01bb",
    "\u0007\u0014\u0002\u0002\u01bb\u01bd\u0003\u0002\u0002\u0002\u01bc\u01b3",
    "\u0003\u0002\u0002\u0002\u01bc\u01b6\u0003\u0002\u0002\u0002\u01bc\u01b7",
    "\u0003\u0002\u0002\u0002\u01bc\u01b8\u0003\u0002\u0002\u0002\u01bd\u01c6",
    "\u0003\u0002\u0002\u0002\u01be\u01bf\f\u0006\u0002\u0002\u01bf\u01c0",
    "\u0007-\u0002\u0002\u01c0\u01c5\u0005N(\u0007\u01c1\u01c2\f\u0005\u0002",
    "\u0002\u01c2\u01c3\u0007,\u0002\u0002\u01c3\u01c5\u0005N(\u0006\u01c4",
    "\u01be\u0003\u0002\u0002\u0002\u01c4\u01c1\u0003\u0002\u0002\u0002\u01c5",
    "\u01c8\u0003\u0002\u0002\u0002\u01c6\u01c4\u0003\u0002\u0002\u0002\u01c6",
    "\u01c7\u0003\u0002\u0002\u0002\u01c7O\u0003\u0002\u0002\u0002\u01c8",
    "\u01c6\u0003\u0002\u0002\u0002\u01c9\u01ca\t\u0007\u0002\u0002\u01ca",
    "Q\u0003\u0002\u0002\u0002\u01cb\u01cf\u0005P)\u0002\u01cc\u01cf\u0007",
    "<\u0002\u0002\u01cd\u01cf\u0005\u000e\b\u0002\u01ce\u01cb\u0003\u0002",
    "\u0002\u0002\u01ce\u01cc\u0003\u0002\u0002\u0002\u01ce\u01cd\u0003\u0002",
    "\u0002\u0002\u01cfS\u0003\u0002\u0002\u0002\u01d0\u01d4\u0005R*\u0002",
    "\u01d1\u01d4\u0005\u0010\t\u0002\u01d2\u01d4\u0007=\u0002\u0002\u01d3",
    "\u01d0\u0003\u0002\u0002\u0002\u01d3\u01d1\u0003\u0002\u0002\u0002\u01d3",
    "\u01d2\u0003\u0002\u0002\u0002\u01d4U\u0003\u0002\u0002\u0002/\\bhl",
    "r{\u0082\u0086\u0094\u0097\u009e\u00a1\u00a6\u00aa\u00b5\u00bd\u00c3",
    "\u00d1\u00d4\u00d9\u00e3\u00ea\u00f2\u00fa\u0101\u0112\u0121\u0125\u012a",
    "\u0134\u013c\u0140\u0144\u014a\u0151\u0155\u0167\u0190\u0192\u01b1\u01bc",
    "\u01c4\u01c6\u01ce\u01d3"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'module'", "'pipeline'", "'flow'", "'use'", 
                     "'config'", "'default'", "'const'", "'if'", "'else'", 
                     "'for'", "'in'", "'void'", "'while'", "'true'", "'false'", 
                     "';'", "'('", "')'", "'{'", "'}'", "'['", "']'", "'..'", 
                     "','", "'::'", "'.'", "'+'", "'-'", "'*'", "'/'", "'%'", 
                     "'**'", "'(*)'", "'(.)'", "'<'", "'>'", "'<='", "'>='", 
                     "'=='", "'!='", "'='", "'&&'", "'||'", "'!'", "'<<'", 
                     "'>>'", "'&'", "'|'", "'~'", "'^'", "'int'", "'float'", 
                     "'boolean'" ];

var symbolicNames = [ null, "MODULE", "PIPELINE", "FLOW", "USE", "CONFIG", 
                      "DEFAULT", "CONST", "IF", "ELSE", "FOR", "IN", "VOID", 
                      "WHILE", "TRUE", "FALSE", "SEMI", "LP", "RP", "LB", 
                      "RB", "LS", "RS", "DPERIOD", "COMMA", "DCOLON", "PERIOD", 
                      "PLUS", "MINUS", "MUL", "DIV", "MOD", "POW", "HPROD", 
                      "CAT", "LT", "GT", "LTE", "GTE", "EQ", "NEQ", "ASSIGN", 
                      "LAND", "LOR", "LNOT", "LSHIFT", "RSHIFT", "BAND", 
                      "BOR", "BNOT", "BXOR", "INT", "FLOAT", "BOOLEAN", 
                      "Identifier", "IntegerConstant", "FloatingConstant", 
                      "DigitSequence", "CharacterConstant", "StringLiteral", 
                      "Whitespace", "Newline", "BlockComment", "LineComment" ];

var ruleNames =  [ "module", "pipelineDef", "pipelineBlock", "pipelineEntry", 
                   "pipelineList", "useSpec", "booleanLiteral", "arrayLiteral", 
                   "initValue", "varDef", "dimExpr", "dimValue", "dimensionSpec", 
                   "intVal", "numVal", "rangeType", "primitiveType", "varType", 
                   "flowType", "formalParam", "formalParams", "stmtBlock", 
                   "elseStmt", "ifStmt", "identifierList", "forStmt", "whileStmt", 
                   "assignStmt", "stmt", "funcDef", "qualIdentifier", "cppQualIdentifier", 
                   "functionCall", "actualParam", "actualParams", "arrayExpr", 
                   "basicExpr", "relExpr", "expr", "numConstant", "exprConstant", 
                   "literal" ];

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
VerticalThings.SEMI = 16;
VerticalThings.LP = 17;
VerticalThings.RP = 18;
VerticalThings.LB = 19;
VerticalThings.RB = 20;
VerticalThings.LS = 21;
VerticalThings.RS = 22;
VerticalThings.DPERIOD = 23;
VerticalThings.COMMA = 24;
VerticalThings.DCOLON = 25;
VerticalThings.PERIOD = 26;
VerticalThings.PLUS = 27;
VerticalThings.MINUS = 28;
VerticalThings.MUL = 29;
VerticalThings.DIV = 30;
VerticalThings.MOD = 31;
VerticalThings.POW = 32;
VerticalThings.HPROD = 33;
VerticalThings.CAT = 34;
VerticalThings.LT = 35;
VerticalThings.GT = 36;
VerticalThings.LTE = 37;
VerticalThings.GTE = 38;
VerticalThings.EQ = 39;
VerticalThings.NEQ = 40;
VerticalThings.ASSIGN = 41;
VerticalThings.LAND = 42;
VerticalThings.LOR = 43;
VerticalThings.LNOT = 44;
VerticalThings.LSHIFT = 45;
VerticalThings.RSHIFT = 46;
VerticalThings.BAND = 47;
VerticalThings.BOR = 48;
VerticalThings.BNOT = 49;
VerticalThings.BXOR = 50;
VerticalThings.INT = 51;
VerticalThings.FLOAT = 52;
VerticalThings.BOOLEAN = 53;
VerticalThings.Identifier = 54;
VerticalThings.IntegerConstant = 55;
VerticalThings.FloatingConstant = 56;
VerticalThings.DigitSequence = 57;
VerticalThings.CharacterConstant = 58;
VerticalThings.StringLiteral = 59;
VerticalThings.Whitespace = 60;
VerticalThings.Newline = 61;
VerticalThings.BlockComment = 62;
VerticalThings.LineComment = 63;

VerticalThings.RULE_module = 0;
VerticalThings.RULE_pipelineDef = 1;
VerticalThings.RULE_pipelineBlock = 2;
VerticalThings.RULE_pipelineEntry = 3;
VerticalThings.RULE_pipelineList = 4;
VerticalThings.RULE_useSpec = 5;
VerticalThings.RULE_booleanLiteral = 6;
VerticalThings.RULE_arrayLiteral = 7;
VerticalThings.RULE_initValue = 8;
VerticalThings.RULE_varDef = 9;
VerticalThings.RULE_dimExpr = 10;
VerticalThings.RULE_dimValue = 11;
VerticalThings.RULE_dimensionSpec = 12;
VerticalThings.RULE_intVal = 13;
VerticalThings.RULE_numVal = 14;
VerticalThings.RULE_rangeType = 15;
VerticalThings.RULE_primitiveType = 16;
VerticalThings.RULE_varType = 17;
VerticalThings.RULE_flowType = 18;
VerticalThings.RULE_formalParam = 19;
VerticalThings.RULE_formalParams = 20;
VerticalThings.RULE_stmtBlock = 21;
VerticalThings.RULE_elseStmt = 22;
VerticalThings.RULE_ifStmt = 23;
VerticalThings.RULE_identifierList = 24;
VerticalThings.RULE_forStmt = 25;
VerticalThings.RULE_whileStmt = 26;
VerticalThings.RULE_assignStmt = 27;
VerticalThings.RULE_stmt = 28;
VerticalThings.RULE_funcDef = 29;
VerticalThings.RULE_qualIdentifier = 30;
VerticalThings.RULE_cppQualIdentifier = 31;
VerticalThings.RULE_functionCall = 32;
VerticalThings.RULE_actualParam = 33;
VerticalThings.RULE_actualParams = 34;
VerticalThings.RULE_arrayExpr = 35;
VerticalThings.RULE_basicExpr = 36;
VerticalThings.RULE_relExpr = 37;
VerticalThings.RULE_expr = 38;
VerticalThings.RULE_numConstant = 39;
VerticalThings.RULE_exprConstant = 40;
VerticalThings.RULE_literal = 41;

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
        this.state = 84;
        this.match(VerticalThings.MODULE);
        this.state = 85;
        this.match(VerticalThings.Identifier);
        this.state = 86;
        this.match(VerticalThings.SEMI);
        this.state = 90;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VerticalThings.USE) {
            this.state = 87;
            this.useSpec();
            this.state = 92;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 96;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 93;
                this.varDef(); 
            }
            this.state = 98;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
        }

        this.state = 106;
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
            this.state = 102;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VerticalThings.FLOW) | (1 << VerticalThings.DEFAULT) | (1 << VerticalThings.VOID) | (1 << VerticalThings.LS))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (VerticalThings.INT - 51)) | (1 << (VerticalThings.FLOAT - 51)) | (1 << (VerticalThings.BOOLEAN - 51)) | (1 << (VerticalThings.Identifier - 51)))) !== 0)) {
                this.state = 99;
                this.funcDef();
                this.state = 104;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case VerticalThings.PIPELINE:
            this.state = 105;
            this.pipelineDef();
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
    this.enterRule(localctx, 2, VerticalThings.RULE_pipelineDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
        this.match(VerticalThings.PIPELINE);
        this.state = 109;
        this.match(VerticalThings.Identifier);
        this.state = 110;
        this.pipelineBlock();
        this.state = 112;
        _la = this._input.LA(1);
        if(_la===VerticalThings.SEMI) {
            this.state = 111;
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
    this.enterRule(localctx, 4, VerticalThings.RULE_pipelineBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
        this.match(VerticalThings.LB);
        this.state = 115;
        this.pipelineList();
        this.state = 116;
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
    this.enterRule(localctx, 6, VerticalThings.RULE_pipelineEntry);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 121;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.state = 118;
            this.qualIdentifier();
            break;

        case 2:
            this.state = 119;
            this.functionCall();
            break;

        case 3:
            this.state = 120;
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
    this.enterRule(localctx, 8, VerticalThings.RULE_pipelineList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 123;
        this.pipelineEntry();
        this.state = 128;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 124;
                this.match(VerticalThings.COMMA);
                this.state = 125;
                this.pipelineEntry(); 
            }
            this.state = 130;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
        }

        this.state = 132;
        _la = this._input.LA(1);
        if(_la===VerticalThings.COMMA) {
            this.state = 131;
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
    this.enterRule(localctx, 10, VerticalThings.RULE_useSpec);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 134;
        this.match(VerticalThings.USE);
        this.state = 135;
        this.match(VerticalThings.Identifier);
        this.state = 136;
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
    this.enterRule(localctx, 12, VerticalThings.RULE_booleanLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 138;
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
    this.enterRule(localctx, 14, VerticalThings.RULE_arrayLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.match(VerticalThings.LB);
        this.state = 149;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VerticalThings.TRUE) | (1 << VerticalThings.FALSE) | (1 << VerticalThings.LB))) !== 0) || ((((_la - 55)) & ~0x1f) == 0 && ((1 << (_la - 55)) & ((1 << (VerticalThings.IntegerConstant - 55)) | (1 << (VerticalThings.FloatingConstant - 55)) | (1 << (VerticalThings.CharacterConstant - 55)) | (1 << (VerticalThings.StringLiteral - 55)))) !== 0)) {
            this.state = 141;
            this.literal();
            this.state = 146;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===VerticalThings.COMMA) {
                this.state = 142;
                this.match(VerticalThings.COMMA);
                this.state = 143;
                this.literal();
                this.state = 148;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 151;
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
    this.enterRule(localctx, 16, VerticalThings.RULE_initValue);
    try {
        this.state = 156;
        switch(this._input.LA(1)) {
        case VerticalThings.TRUE:
        case VerticalThings.FALSE:
        case VerticalThings.LP:
        case VerticalThings.MINUS:
        case VerticalThings.LNOT:
        case VerticalThings.BNOT:
        case VerticalThings.Identifier:
        case VerticalThings.IntegerConstant:
        case VerticalThings.FloatingConstant:
        case VerticalThings.CharacterConstant:
            this.enterOuterAlt(localctx, 1);
            this.state = 153;
            this.expr(0);
            break;
        case VerticalThings.StringLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 154;
            this.match(VerticalThings.StringLiteral);
            break;
        case VerticalThings.LB:
            this.enterOuterAlt(localctx, 3);
            this.state = 155;
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

VarDefContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

VarDefContext.prototype.SEMI = function() {
    return this.getToken(VerticalThings.SEMI, 0);
};

VarDefContext.prototype.CONST = function() {
    return this.getToken(VerticalThings.CONST, 0);
};

VarDefContext.prototype.dimensionSpec = function() {
    return this.getTypedRuleContext(DimensionSpecContext,0);
};

VarDefContext.prototype.ASSIGN = function() {
    return this.getToken(VerticalThings.ASSIGN, 0);
};

VarDefContext.prototype.initValue = function() {
    return this.getTypedRuleContext(InitValueContext,0);
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
    this.enterRule(localctx, 18, VerticalThings.RULE_varDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
        _la = this._input.LA(1);
        if(_la===VerticalThings.CONST) {
            this.state = 158;
            this.match(VerticalThings.CONST);
        }

        this.state = 161;
        this.varType();
        this.state = 162;
        this.match(VerticalThings.Identifier);
        this.state = 164;
        _la = this._input.LA(1);
        if(_la===VerticalThings.LS) {
            this.state = 163;
            this.dimensionSpec();
        }

        this.state = 168;
        _la = this._input.LA(1);
        if(_la===VerticalThings.ASSIGN) {
            this.state = 166;
            this.match(VerticalThings.ASSIGN);
            this.state = 167;
            this.initValue();
        }

        this.state = 170;
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
    this.enterRule(localctx, 20, VerticalThings.RULE_dimExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.intVal();
        this.state = 173;
        localctx.op = this._input.LT(1);
        _la = this._input.LA(1);
        if(!(_la===VerticalThings.PLUS || _la===VerticalThings.MUL)) {
            localctx.op = this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 174;
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
    this.enterRule(localctx, 22, VerticalThings.RULE_dimValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        switch(la_) {
        case 1:
            this.state = 176;
            this.match(VerticalThings.IntegerConstant);
            break;

        case 2:
            this.state = 177;
            this.match(VerticalThings.Identifier);
            break;

        case 3:
            this.state = 178;
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
    this.enterRule(localctx, 24, VerticalThings.RULE_dimensionSpec);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 185; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 181;
        		this.match(VerticalThings.LS);
        		this.state = 182;
        		this.dimValue();
        		this.state = 183;
        		this.match(VerticalThings.RS);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 187; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,15, this._ctx);
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
    this.enterRule(localctx, 26, VerticalThings.RULE_intVal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 189;
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
    this.enterRule(localctx, 28, VerticalThings.RULE_numVal);
    try {
        this.state = 193;
        switch(this._input.LA(1)) {
        case VerticalThings.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 191;
            this.match(VerticalThings.Identifier);
            break;
        case VerticalThings.IntegerConstant:
        case VerticalThings.FloatingConstant:
            this.enterOuterAlt(localctx, 2);
            this.state = 192;
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

RangeTypeContext.prototype.DPERIOD = function() {
    return this.getToken(VerticalThings.DPERIOD, 0);
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
    this.enterRule(localctx, 30, VerticalThings.RULE_rangeType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.match(VerticalThings.LS);
        this.state = 196;
        this.numVal();
        this.state = 197;
        _la = this._input.LA(1);
        if(!(_la===VerticalThings.DPERIOD || _la===VerticalThings.COMMA)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 198;
        this.numVal();
        this.state = 199;
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
    this.enterRule(localctx, 32, VerticalThings.RULE_primitiveType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 201;
        _la = this._input.LA(1);
        if(!(_la===VerticalThings.VOID || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (VerticalThings.INT - 51)) | (1 << (VerticalThings.FLOAT - 51)) | (1 << (VerticalThings.BOOLEAN - 51)))) !== 0))) {
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
    this.enterRule(localctx, 34, VerticalThings.RULE_varType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 207;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        switch(la_) {
        case 1:
            this.state = 203;
            this.qualIdentifier();
            break;

        case 2:
            this.state = 204;
            this.cppQualIdentifier();
            break;

        case 3:
            this.state = 205;
            this.rangeType();
            break;

        case 4:
            this.state = 206;
            this.primitiveType();
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
    this.enterRule(localctx, 36, VerticalThings.RULE_flowType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 210;
        _la = this._input.LA(1);
        if(_la===VerticalThings.DEFAULT) {
            this.state = 209;
            this.match(VerticalThings.DEFAULT);
        }

        this.state = 212;
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
    this.enterRule(localctx, 38, VerticalThings.RULE_formalParam);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 215;
        _la = this._input.LA(1);
        if(_la===VerticalThings.CONST) {
            this.state = 214;
            this.match(VerticalThings.CONST);
        }

        this.state = 217;
        this.varType();
        this.state = 218;
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
    this.enterRule(localctx, 40, VerticalThings.RULE_formalParams);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 220;
        this.formalParam();
        this.state = 225;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VerticalThings.COMMA) {
            this.state = 221;
            this.match(VerticalThings.COMMA);
            this.state = 222;
            this.formalParam();
            this.state = 227;
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
    this.enterRule(localctx, 42, VerticalThings.RULE_stmtBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 228;
        this.match(VerticalThings.LB);
        this.state = 232;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VerticalThings.IF) | (1 << VerticalThings.FOR) | (1 << VerticalThings.WHILE) | (1 << VerticalThings.LB))) !== 0) || _la===VerticalThings.Identifier) {
            this.state = 229;
            this.stmt();
            this.state = 234;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 235;
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
    this.enterRule(localctx, 44, VerticalThings.RULE_elseStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 237;
        this.match(VerticalThings.ELSE);
        this.state = 240;
        switch(this._input.LA(1)) {
        case VerticalThings.LB:
            this.state = 238;
            this.stmtBlock();
            break;
        case VerticalThings.IF:
            this.state = 239;
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
    this.enterRule(localctx, 46, VerticalThings.RULE_ifStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 242;
        this.match(VerticalThings.IF);
        this.state = 243;
        this.match(VerticalThings.LP);
        this.state = 244;
        this.expr(0);
        this.state = 245;
        this.match(VerticalThings.RP);
        this.state = 246;
        this.stmtBlock();
        this.state = 248;
        _la = this._input.LA(1);
        if(_la===VerticalThings.ELSE) {
            this.state = 247;
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
    this.enterRule(localctx, 48, VerticalThings.RULE_identifierList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 250;
        this.match(VerticalThings.Identifier);
        this.state = 255;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VerticalThings.COMMA) {
            this.state = 251;
            this.match(VerticalThings.COMMA);
            this.state = 252;
            this.match(VerticalThings.Identifier);
            this.state = 257;
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
    this.enterRule(localctx, 50, VerticalThings.RULE_forStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 258;
        this.match(VerticalThings.FOR);
        this.state = 259;
        this.identifierList();
        this.state = 260;
        this.match(VerticalThings.IN);
        this.state = 261;
        this.rangeType();
        this.state = 262;
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
    this.enterRule(localctx, 52, VerticalThings.RULE_whileStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 264;
        this.match(VerticalThings.WHILE);
        this.state = 265;
        this.match(VerticalThings.LP);
        this.state = 266;
        this.expr(0);
        this.state = 267;
        this.match(VerticalThings.RP);
        this.state = 268;
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
    this.enterRule(localctx, 54, VerticalThings.RULE_assignStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 270;
        this.qualIdentifier();
        this.state = 272;
        _la = this._input.LA(1);
        if(_la===VerticalThings.LS) {
            this.state = 271;
            this.dimensionSpec();
        }

        this.state = 274;
        this.match(VerticalThings.ASSIGN);
        this.state = 275;
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
    this.enterRule(localctx, 56, VerticalThings.RULE_stmt);
    try {
        this.state = 287;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 277;
            this.stmtBlock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 278;
            this.ifStmt();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 279;
            this.forStmt();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 280;
            this.whileStmt();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 281;
            this.assignStmt();
            this.state = 282;
            this.match(VerticalThings.SEMI);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 284;
            this.functionCall();
            this.state = 285;
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

FuncDefContext.prototype.stmtBlock = function() {
    return this.getTypedRuleContext(StmtBlockContext,0);
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
    this.enterRule(localctx, 58, VerticalThings.RULE_funcDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 291;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        if(la_===1) {
            this.state = 289;
            this.varType();

        } else if(la_===2) {
            this.state = 290;
            this.flowType();

        }
        this.state = 293;
        this.match(VerticalThings.Identifier);
        this.state = 294;
        this.match(VerticalThings.LP);
        this.state = 296;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VerticalThings.CONST) | (1 << VerticalThings.VOID) | (1 << VerticalThings.LS))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (VerticalThings.INT - 51)) | (1 << (VerticalThings.FLOAT - 51)) | (1 << (VerticalThings.BOOLEAN - 51)) | (1 << (VerticalThings.Identifier - 51)))) !== 0)) {
            this.state = 295;
            this.formalParams();
        }

        this.state = 298;
        this.match(VerticalThings.RP);
        this.state = 299;
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
    this.enterRule(localctx, 60, VerticalThings.RULE_qualIdentifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 301;
        this.match(VerticalThings.Identifier);
        this.state = 306;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,29,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 302;
                this.match(VerticalThings.PERIOD);
                this.state = 303;
                this.match(VerticalThings.Identifier); 
            }
            this.state = 308;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,29,this._ctx);
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
    this.enterRule(localctx, 62, VerticalThings.RULE_cppQualIdentifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 309;
        this.match(VerticalThings.Identifier);
        this.state = 312; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 310;
            this.match(VerticalThings.DCOLON);
            this.state = 311;
            this.match(VerticalThings.Identifier);
            this.state = 314; 
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
    this.enterRule(localctx, 64, VerticalThings.RULE_functionCall);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 318;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
        switch(la_) {
        case 1:
            this.state = 316;
            this.qualIdentifier();
            break;

        case 2:
            this.state = 317;
            this.cppQualIdentifier();
            break;

        }
        this.state = 320;
        this.match(VerticalThings.LP);
        this.state = 322;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VerticalThings.TRUE) | (1 << VerticalThings.FALSE) | (1 << VerticalThings.LP) | (1 << VerticalThings.MINUS))) !== 0) || ((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (VerticalThings.LNOT - 44)) | (1 << (VerticalThings.BNOT - 44)) | (1 << (VerticalThings.Identifier - 44)) | (1 << (VerticalThings.IntegerConstant - 44)) | (1 << (VerticalThings.FloatingConstant - 44)) | (1 << (VerticalThings.CharacterConstant - 44)) | (1 << (VerticalThings.StringLiteral - 44)))) !== 0)) {
            this.state = 321;
            this.actualParams();
        }

        this.state = 324;
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
    this.enterRule(localctx, 66, VerticalThings.RULE_actualParam);
    try {
        this.state = 328;
        switch(this._input.LA(1)) {
        case VerticalThings.TRUE:
        case VerticalThings.FALSE:
        case VerticalThings.LP:
        case VerticalThings.MINUS:
        case VerticalThings.LNOT:
        case VerticalThings.BNOT:
        case VerticalThings.Identifier:
        case VerticalThings.IntegerConstant:
        case VerticalThings.FloatingConstant:
        case VerticalThings.CharacterConstant:
            this.enterOuterAlt(localctx, 1);
            this.state = 326;
            this.expr(0);
            break;
        case VerticalThings.StringLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 327;
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
    this.enterRule(localctx, 68, VerticalThings.RULE_actualParams);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 330;
        this.actualParam();
        this.state = 335;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,34,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 331;
                this.match(VerticalThings.COMMA);
                this.state = 332;
                this.actualParam(); 
            }
            this.state = 337;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,34,this._ctx);
        }

        this.state = 339;
        _la = this._input.LA(1);
        if(_la===VerticalThings.COMMA) {
            this.state = 338;
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
    this.enterRule(localctx, 70, VerticalThings.RULE_arrayExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 341;
        this.match(VerticalThings.Identifier);
        this.state = 342;
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

BasicExprContext.prototype.qualIdentifier = function() {
    return this.getTypedRuleContext(QualIdentifierContext,0);
};

BasicExprContext.prototype.arrayExpr = function() {
    return this.getTypedRuleContext(ArrayExprContext,0);
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

BasicExprContext.prototype.PLUS = function() {
    return this.getToken(VerticalThings.PLUS, 0);
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

BasicExprContext.prototype.POW = function() {
    return this.getToken(VerticalThings.POW, 0);
};

BasicExprContext.prototype.LSHIFT = function() {
    return this.getToken(VerticalThings.LSHIFT, 0);
};

BasicExprContext.prototype.RSHIFT = function() {
    return this.getToken(VerticalThings.RSHIFT, 0);
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

BasicExprContext.prototype.HPROD = function() {
    return this.getToken(VerticalThings.HPROD, 0);
};

BasicExprContext.prototype.CAT = function() {
    return this.getToken(VerticalThings.CAT, 0);
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
    var _startState = 72;
    this.enterRecursionRule(localctx, 72, VerticalThings.RULE_basicExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 357;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
        switch(la_) {
        case 1:
            this.state = 345;
            localctx.up = this.match(VerticalThings.BNOT);
            this.state = 346;
            this.basicExpr(3);
            break;

        case 2:
            this.state = 347;
            localctx.up = this.match(VerticalThings.MINUS);
            this.state = 348;
            this.basicExpr(2);
            break;

        case 3:
            this.state = 349;
            this.qualIdentifier();
            break;

        case 4:
            this.state = 350;
            this.arrayExpr();
            break;

        case 5:
            this.state = 351;
            this.functionCall();
            break;

        case 6:
            this.state = 352;
            this.exprConstant();
            break;

        case 7:
            this.state = 353;
            this.match(VerticalThings.LP);
            this.state = 354;
            this.basicExpr(0);
            this.state = 355;
            this.match(VerticalThings.RP);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 400;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,38,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 398;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 359;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 360;
                    localctx.op = this.match(VerticalThings.PLUS);
                    this.state = 361;
                    this.basicExpr(17);
                    break;

                case 2:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 362;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 363;
                    localctx.op = this.match(VerticalThings.MINUS);
                    this.state = 364;
                    this.basicExpr(16);
                    break;

                case 3:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 365;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 366;
                    localctx.op = this.match(VerticalThings.MUL);
                    this.state = 367;
                    this.basicExpr(15);
                    break;

                case 4:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 368;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 369;
                    localctx.op = this.match(VerticalThings.DIV);
                    this.state = 370;
                    this.basicExpr(14);
                    break;

                case 5:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 371;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 372;
                    localctx.op = this.match(VerticalThings.MOD);
                    this.state = 373;
                    this.basicExpr(13);
                    break;

                case 6:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 374;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 375;
                    localctx.op = this.match(VerticalThings.POW);
                    this.state = 376;
                    this.basicExpr(12);
                    break;

                case 7:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 377;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 378;
                    localctx.op = this.match(VerticalThings.LSHIFT);
                    this.state = 379;
                    this.basicExpr(11);
                    break;

                case 8:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 380;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 381;
                    localctx.op = this.match(VerticalThings.RSHIFT);
                    this.state = 382;
                    this.basicExpr(10);
                    break;

                case 9:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 383;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 384;
                    localctx.op = this.match(VerticalThings.BAND);
                    this.state = 385;
                    this.basicExpr(9);
                    break;

                case 10:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 386;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 387;
                    localctx.op = this.match(VerticalThings.BOR);
                    this.state = 388;
                    this.basicExpr(8);
                    break;

                case 11:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 389;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 390;
                    localctx.op = this.match(VerticalThings.BXOR);
                    this.state = 391;
                    this.basicExpr(7);
                    break;

                case 12:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 392;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 393;
                    localctx.op = this.match(VerticalThings.HPROD);
                    this.state = 394;
                    this.basicExpr(6);
                    break;

                case 13:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 395;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 396;
                    localctx.op = this.match(VerticalThings.CAT);
                    this.state = 397;
                    this.basicExpr(5);
                    break;

                } 
            }
            this.state = 402;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,38,this._ctx);
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
    this.enterRule(localctx, 74, VerticalThings.RULE_relExpr);
    try {
        this.state = 431;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 403;
            this.basicExpr(0);
            this.state = 404;
            localctx.op = this.match(VerticalThings.GT);
            this.state = 405;
            this.basicExpr(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 407;
            this.basicExpr(0);
            this.state = 408;
            localctx.op = this.match(VerticalThings.GTE);
            this.state = 409;
            this.basicExpr(0);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 411;
            this.basicExpr(0);
            this.state = 412;
            localctx.op = this.match(VerticalThings.LT);
            this.state = 413;
            this.basicExpr(0);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 415;
            this.basicExpr(0);
            this.state = 416;
            localctx.op = this.match(VerticalThings.LTE);
            this.state = 417;
            this.basicExpr(0);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 419;
            this.basicExpr(0);
            this.state = 420;
            localctx.op = this.match(VerticalThings.EQ);
            this.state = 421;
            this.basicExpr(0);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 423;
            this.basicExpr(0);
            this.state = 424;
            localctx.op = this.match(VerticalThings.NEQ);
            this.state = 425;
            this.basicExpr(0);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 427;
            this.match(VerticalThings.LP);
            this.state = 428;
            this.relExpr();
            this.state = 429;
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
    var _startState = 76;
    this.enterRecursionRule(localctx, 76, VerticalThings.RULE_expr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 442;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
        switch(la_) {
        case 1:
            this.state = 434;
            this.match(VerticalThings.LNOT);
            this.state = 435;
            this.expr(1);
            break;

        case 2:
            this.state = 436;
            this.basicExpr(0);
            break;

        case 3:
            this.state = 437;
            this.relExpr();
            break;

        case 4:
            this.state = 438;
            this.match(VerticalThings.LP);
            this.state = 439;
            this.expr(0);
            this.state = 440;
            this.match(VerticalThings.RP);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 452;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,42,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 450;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_expr);
                    this.state = 444;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 445;
                    localctx.op = this.match(VerticalThings.LOR);
                    this.state = 446;
                    this.expr(5);
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_expr);
                    this.state = 447;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 448;
                    localctx.op = this.match(VerticalThings.LAND);
                    this.state = 449;
                    this.expr(4);
                    break;

                } 
            }
            this.state = 454;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,42,this._ctx);
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
    this.enterRule(localctx, 78, VerticalThings.RULE_numConstant);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 455;
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
    this.enterRule(localctx, 80, VerticalThings.RULE_exprConstant);
    try {
        this.state = 460;
        switch(this._input.LA(1)) {
        case VerticalThings.IntegerConstant:
        case VerticalThings.FloatingConstant:
            this.enterOuterAlt(localctx, 1);
            this.state = 457;
            this.numConstant();
            break;
        case VerticalThings.CharacterConstant:
            this.enterOuterAlt(localctx, 2);
            this.state = 458;
            this.match(VerticalThings.CharacterConstant);
            break;
        case VerticalThings.TRUE:
        case VerticalThings.FALSE:
            this.enterOuterAlt(localctx, 3);
            this.state = 459;
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
    this.enterRule(localctx, 82, VerticalThings.RULE_literal);
    try {
        this.state = 465;
        switch(this._input.LA(1)) {
        case VerticalThings.TRUE:
        case VerticalThings.FALSE:
        case VerticalThings.IntegerConstant:
        case VerticalThings.FloatingConstant:
        case VerticalThings.CharacterConstant:
            this.enterOuterAlt(localctx, 1);
            this.state = 462;
            this.exprConstant();
            break;
        case VerticalThings.LB:
            this.enterOuterAlt(localctx, 2);
            this.state = 463;
            this.arrayLiteral();
            break;
        case VerticalThings.StringLiteral:
            this.enterOuterAlt(localctx, 3);
            this.state = 464;
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
	case 36:
			return this.basicExpr_sempred(localctx, predIndex);
	case 38:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

VerticalThings.prototype.basicExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 16);
		case 1:
			return this.precpred(this._ctx, 15);
		case 2:
			return this.precpred(this._ctx, 14);
		case 3:
			return this.precpred(this._ctx, 13);
		case 4:
			return this.precpred(this._ctx, 12);
		case 5:
			return this.precpred(this._ctx, 11);
		case 6:
			return this.precpred(this._ctx, 10);
		case 7:
			return this.precpred(this._ctx, 9);
		case 8:
			return this.precpred(this._ctx, 8);
		case 9:
			return this.precpred(this._ctx, 7);
		case 10:
			return this.precpred(this._ctx, 6);
		case 11:
			return this.precpred(this._ctx, 5);
		case 12:
			return this.precpred(this._ctx, 4);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

VerticalThings.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 13:
			return this.precpred(this._ctx, 4);
		case 14:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.VerticalThings = VerticalThings;
