import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv('Housing.csv') 

print("\n--- Basic Information ---")
print(df.info())

print("\n--- First 5 Rows ---")
print(df.head())

print("\n--- Statistics ---")
print(df.describe())

print("\n--- Unique Values ---")
print(df.nunique())

df.hist(bins=30, figsize=(15, 10))
plt.suptitle('Histograms of Numeric Features', fontsize=16)
plt.show()
