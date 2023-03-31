# Boundary test example

This repo demonstrates two ways of testing code. In the `test/good` folder, there is one spec file. This spec file tests cash-till.

The business requirement is covered and I think the anyone reading and running the test would understand what the system is supposed to do.

In `test/bad`, I have mocked the `adder` and `prefixer`, checking the cash-till result and also verifying the use of adder and prefixer.

The business requirement is still there, but now it is obscured by test details that are irrelevant.

Additionally, if I now change the design, for example, in-lining the `adder` reducer into `addUp`, the bad test will fail as `adder` is not called. Tests should not fail because internal design details change - unless there is some specific business requirement that the internals work in a certain way.

I used TDD to write the first test and implement the function. I wouldn't normally have extracted `adder` and `prefixer`, but it was a useful way to illustrate the issues associated with testing internals. 

This repo also has a `with-tax` branch in which I've demonstrated a use-case where I think it _is_ appropriate to extract a feature. Tax has its own specific rules and I think that warrants separating it from the cash-till implementation. 

# Install

`npm i`

# Test

`npm test`
