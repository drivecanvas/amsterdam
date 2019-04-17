# Deprecations

## Upgrade to 0.2.0

The following CSS rules are now deprecated, see equivalent for how to upgrade

```
.border-top-thick // -> .border-top.border-width-2
.border-right-thick // -> .border-top.border-width-2
.border-bottom-thick // -> .border-top.border-width-2
.border-left-thick // -> .border-top.border-width-2
.border-dotted // -> no longer exists
.border-xs // -> .border
.border-xs-left // -> .boder-left
.border-xs-right // -> .border-right
.border-xs-top // -> .border-top
.border-xs-bottom // -> .border-bottom
.no-border-xs-bottom // -> .no-border

.inline-block -> .d-inline-block (overalps with bootstrap)
.inline -> .d-inline (overalps with bootstrap)
.block -> .d-block (overalps with bootstrap)

// these rules no longer exist as they're not used anywhere.
// given the sice of these fixed measure, if they're being, it's mostlikely that we're doing
// something wrong

.width-xxl
.min-width-xxl
.max-width-xxl
.height-xxl
.min-height-xxl
.max-height-xxl
.width-xxl
.min-width-xxl
.max-width-xxl
.height-xxl
.min-height-xxl
.max-height-xxl

.width-xxxl
.min-width-xxxl
.max-width-xxxl
.height-xxxl
.min-height-xxxl
.max-height-xxxl
.width-xxxl
.min-width-xxxl
.max-width-xxxl
.height-xxxl
.min-height-xxxl
.max-height-xxxl
```
