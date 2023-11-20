
import unittest

class TestSumFunction(unittest.TestCase):
    def test_sum_integers(self):
        self.assertEqual(sum([1, 2, 3]), 6, 'Should be 6')

    def test_sum_floats(self):
        self.assertEqual(sum([0.1, 0.2, 0.3]), 0.6, 'Should be 0.6')

    def test_sum_negative(self):
        self.assertEqual(sum([-1, -2, -3]), -6, 'Should be -6')

    def test_sum_mixed(self):
        self.assertEqual(sum([1, '2', 3]), 'TypeError', 'Should raise TypeError')

if __name__ == '__main__':
    unittest.main()
