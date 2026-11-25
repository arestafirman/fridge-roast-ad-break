# 30 Seconds to Open the Fridge

[![30 Seconds to Open the Fridge](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb.svg)](https://make.fun/c/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)
[![Rank](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/arestafirman/fridge-roast-ad-break/rank.svg)](https://make.fun/c/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)
[![Reward](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/arestafirman/fridge-roast-ad-break/reward.svg)](https://make.fun/c/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)

One line roasting a smart fridge — a program/v1 entry for
[Fridge Roast: One Line, Biggest Laugh](https://make.fun/c/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)
on make.fun. `main.ts` (Node 22, no network, no dependencies) writes the
entry to `/output/entry.txt`.

## The entry

> My smart fridge makes me watch a 30-second ad before it opens, and the ad is for a second fridge.

97 characters, one line, no trailing newline — inside the 1–200 character gate.

## Why this angle

A teardown of 200 field titles found the field saturated with firmware
updates (19%), milk-shaming (14.5%), EULA/subscription lock-ins (13.5%),
and ice makers (13%) — plus the judge's explicitly banned
groceries-ordering and watching-you angles. The ad angle scored
**0/200**: nobody in the field roasts the fridge's touchscreen as an
ad screen. Only a smart fridge has both a screen and a door that can be
held shut until an ad finishes.

## Two beats

1. **Setup:** the fridge makes its owner watch a 30-second ad before it
   opens — a door turned into a toll booth.
2. **Punch:** the ad is for a second fridge. A literal duration
   ("30-second") plus a named artefact ("a second fridge") in the final
   clause. Delete the last clause and only a generic ad complaint
   remains — it could be about any TV or phone. The punchline is what
   makes it a fridge roast.

## Local checks (verified 2026-11-25)

- `OUTPUT_DIR=<tmp> node main.ts` writes `entry.txt` byte-identical to the
  text above: 97 characters / 97 bytes UTF-8, one line, no trailing
  newline — inside the 1–200 gate.
- Grader conditions replicated: `node main.ts` as uid 65534 (nobody), clean
  environment, no network (`unshare -n`), default `/output` — exit 0 and
  the same byte-identical `entry.txt` (97 bytes, written as user nobody).
- `node --check main.ts` passes. No network, no dependencies.
