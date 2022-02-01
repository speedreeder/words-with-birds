namespace WordsWithBirds.Api
{
    public static class IListExtensions
    {
        public static IList<T> Shuffle<T>(this IList<T> items)
        {
            var result = items.ToArray();
            var r = new Random();
            for (int i = items.Count; i > 1; i--)
            {
                int j = r.Next(i);
                var t = result[j];
                result[j] = result[i - 1];
                result[i - 1] = t;
            }

            return result.ToList();
        }
    }

    public static class IDictionaryExtensions
    {
        public static Dictionary<int, T> Shuffle<T>(this Dictionary<int, T> source)
        {
            var r = new Random();
            return source.OrderBy(x => r.Next())
               .ToDictionary(item => item.Key, item => item.Value);

        }

        public static void RemoveKeyRange<TKey, TValue>(this Dictionary<TKey, TValue> target,
                                           List<TKey> keys)
        {
            foreach (var key in keys)
            {
                if (target.TryGetValue(key, out _))
                {
                    target.Remove(key);
                }
            }
        }
    }
}
