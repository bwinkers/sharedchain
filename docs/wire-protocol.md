# SharedChain Wire Protocol

SharedChain Syncing 

Two peers connect, say "Hello," and send their Status message. Status includes:
1. Public Key
2. Signed status, which includes:
    a.Total Difficulty (TD) of their copy of the SharedChain blockchain SCBC
    b.List of Services
2. Public Key
The client with the worst TD asks peer for full chain of just block hashes.
Chain of hashes is stored in space shared by all peer connections, and used as a "work pool".
While there are hashes in the chain of hashes that we don't have in our chain:
Ask for N blocks from our peer using the hashes. Mark them as on their way so we don't get them from another peer.
