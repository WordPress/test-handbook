# Testing Gutenberg Tickets with WordPress Playground

WordPress Playground provides a quick and easy way to test Gutenberg-related tickets without setting up a full local environment.

## Steps to Test

1. Open WordPress Playground:
   https://playground.wordpress.net/

2. Install Gutenberg plugin:
   - Go to Plugins → Add New
   - Search for "Gutenberg"
   - Install and activate

3. Reproduce the Issue:
   - Follow steps mentioned in the Gutenberg ticket
   - Try to replicate the bug or behavior

4. Apply Patch (if available):
   - Use GitHub PR diff or patch file
   - Test changes in Playground environment if possible

5. Verify the Fix:
   - Confirm issue is resolved
   - Check for regressions

## Benefits of Playground

- No local setup required
- Fast testing environment
- Ideal for beginners

## Notes

- Some advanced patches may not fully work in Playground
- For deeper testing, use a local WordPress development setup