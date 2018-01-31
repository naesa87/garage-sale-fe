import onSubmit from '../src/create_listing/CreateListing.js'
jest.mock('../src/create_listing/CreateListing.js', jest.fn());

onSubmit.mockImplementation(
    () => ({
        getData: (success, error) => success()
    })
)