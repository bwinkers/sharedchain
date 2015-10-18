# SharedChain Fee Structure
The goal of SharedChain fees is to adequately fund the support and further development of the core SharedChain services.

The fees also serve a tangential goal of preventing excessive free usage from degrading the system.

## Service Registration Fee
Amount: .10 BTC
Allows a Service to register additional links off their registration link.

## Service Modification Fee
Amount: .01 BTC

## Service Rename Fee
Amount: .30 BTC
This permits changing the name of an existing Service Link.

## Private Link Fee
Amount: .01 (free during dev ramp up period)
Provides an individual with a public key identity link in the SharedChain.

# How are Fees Distributed?
The protocol specifies payment to a particular BTC address.
The SharedChain servers will maintain consensus about what address that is.
It will initially be limited to 1 developer address.
The maximum developer payment addresses in the code will be 8, without a full consensus vote.

For SharedChain links requiring a payment, the payment must be made to one of the consensus developer addresses.
Since all BTC payments are public, it is easy to determine if the developers are being paid.
The clients are expected to sufficiently randomize the payments to the various payment addresses.
The Developers will self-manage their group to account for proper ditribution of the funds. It is not expected that each would be rewarded evenly.
If a developer's BTC address is receiving an excessive percentage of the payments, and is not redistributing them, other developers can and should temporarily remove them from the payment's addresses.
The SharedChain code will keep a running average of the fees being earned and lower them if the payments to the developers over a longer period of time.
